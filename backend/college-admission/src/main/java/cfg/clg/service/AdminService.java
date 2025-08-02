package cfg.clg.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cfg.clg.dto.AdminStudentDTO;
import cfg.clg.dto.ApplicationActionDto;
import cfg.clg.dto.ApplicationResponseDto;
import cfg.clg.entity.AdminEntity;
import cfg.clg.entity.ApplicationEntity;
import cfg.clg.entity.StudentEntity;
import cfg.clg.exceptions.AdminNotFoundException;
import cfg.clg.exceptions.ApplicationNotFoundException;
import cfg.clg.exceptions.InvalidActionException;
import cfg.clg.exceptions.UnauthorizedException;
import cfg.clg.repo.AdminRepository;
import cfg.clg.repo.ApplicationRepository;
import cfg.clg.repo.StudentRepository;
import jakarta.transaction.Transactional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepo;

    @Autowired
    private ApplicationRepository appRepo;

    @Autowired
    private StudentRepository studentRepo;

    public List<ApplicationResponseDto> getApplicationsByStatus(String status) {
        List<ApplicationEntity> entities = appRepo.findByStatus(status);

        List<ApplicationResponseDto> result = new ArrayList<>();
        for (ApplicationEntity app : entities) {
            result.add(toResponseDto(app));
        }
        return result;
    }

    public List<ApplicationResponseDto> getAllApplications() {
        List<ApplicationEntity> entities = appRepo.findAll();

        List<ApplicationResponseDto> result = new ArrayList<>();
        for (ApplicationEntity app : entities) {
            result.add(toResponseDto(app));
        }
        return result;
    }

   
    @Transactional
    public ApplicationResponseDto actOnApplication(ApplicationActionDto dto)
            throws InvalidActionException, UnauthorizedException {

        AdminEntity admin = adminRepo.findById(dto.getAdminId())
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with ID: " + dto.getAdminId()));

        ApplicationEntity app = appRepo.findById(dto.getApplicationId())
                .orElseThrow(() -> new ApplicationNotFoundException(dto.getApplicationId()));

        // Authorization check here if needed...

        String action = dto.getAction().toUpperCase(Locale.ROOT);

        if ("APPROVE".equals(action)) {
            app.setStatus("APPROVED");
            app.setRejectionReason(dto.getRejectionReason()); // store approval reason here
        } else if ("REJECT".equals(action)) {
            app.setStatus("REJECTED");
            app.setRejectionReason(dto.getRejectionReason()); // store rejection reason here
        } else {
            throw new InvalidActionException("Unknown action");
        }

        app = appRepo.save(app);

        return toResponseDto(app);
    }

    private ApplicationResponseDto toResponseDto(ApplicationEntity app) {
        ApplicationResponseDto dto = new ApplicationResponseDto();
        dto.setApplicationId(app.getApplicationId());
        dto.setSid(app.getStudent().getSid());
        dto.setProgram(app.getProgram());        // ✅ Include program name
        dto.setDepartment(app.getDepartment());  // ✅ Include department
        dto.setPaymentDone(app.getPaymentDone());
        dto.setEntranceExamScore(app.getEntranceExamScore());
        dto.setStatus(app.getStatus());
        dto.setRejectionReason(app.getRejectionReason());

        if (app.getAdmin() != null) {
            dto.setAdminId(app.getAdmin().getAdminId());
        }

        return dto;
    }




    public AdminStudentDTO getStudentById(int studentId) {
        StudentEntity student = studentRepo.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + studentId));

        AdminStudentDTO dto = new AdminStudentDTO();
        dto.setSid(student.getSid());
        dto.setSname(student.getSname());
        dto.setEmail(student.getEmail());
        dto.setTenthMarks(student.getTenthMarks());
        dto.setInterMarks(student.getInterMarks());

        // ✅ Fetch student applications
        List<ApplicationEntity> apps = appRepo.findByStudentSid(studentId);
        List<ApplicationResponseDto> appDtos = apps.stream()
                .map(this::toResponseDto)
                .toList();

        dto.setApplications(appDtos);

        // ✅ Set entrance exam info from first application
        if (!apps.isEmpty()) {
            ApplicationEntity first = apps.get(0);
            dto.setEntranceExam(first.getEntranceExam() != null && !first.getEntranceExam().isEmpty());
            dto.setEntranceExamScore(first.getEntranceExamScore() != null ? first.getEntranceExamScore().intValue() : null);
        } else {
            dto.setEntranceExam(false);
            dto.setEntranceExamScore(null);
        }

        return dto;
    }

}








