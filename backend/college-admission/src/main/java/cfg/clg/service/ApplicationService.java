package cfg.clg.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cfg.clg.dto.ApplicationDto;
import cfg.clg.entity.ApplicationEntity;
import cfg.clg.entity.StudentEntity;
import cfg.clg.repo.ApplicationRepository;
import cfg.clg.repo.StudentRepository;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository appRepo;

    @Autowired
    private StudentRepository studentRepo;

    public ApplicationDto apply(ApplicationDto dto) {
        StudentEntity student = studentRepo.findById(dto.getSid())
            .orElseThrow(() -> new RuntimeException("Student not found with ID: " + dto.getSid()));

        ApplicationEntity entity = new ApplicationEntity();
        entity.setProgram(dto.getProgram());
        entity.setDepartment(dto.getDepartment());
        entity.setEntranceExam(dto.getEntranceExam());
        entity.setEntranceExamScore(dto.getEntranceExamScore());
        entity.setPaymentDone(dto.getPaymentDone());
        entity.setStudent(student);
        entity.setStatus("Pending");

        appRepo.save(entity);

        dto.setApplicationId(entity.getApplicationId());
        dto.setStatus(entity.getStatus());

        return dto;
    }

    public List<ApplicationDto> getByStudent(int sid) {
        return appRepo.findByStudentSid(sid).stream().map(app -> {
            ApplicationDto dto = new ApplicationDto();
            dto.setApplicationId(app.getApplicationId());
            dto.setSid(app.getStudent().getSid());
            dto.setProgram(app.getProgram());
            dto.setDepartment(app.getDepartment());
            dto.setEntranceExam(app.getEntranceExam());
            dto.setEntranceExamScore(app.getEntranceExamScore());
            dto.setPaymentDone(app.getPaymentDone());
            dto.setStatus(app.getStatus());
            return dto;
        }).collect(Collectors.toList());
    }

    public List<ApplicationDto> getAllApplications() {
        return appRepo.findAll().stream().map(app -> {
            ApplicationDto dto = new ApplicationDto();
            dto.setApplicationId(app.getApplicationId());
            dto.setSid(app.getStudent().getSid());
            dto.setProgram(app.getProgram());
            dto.setDepartment(app.getDepartment());
            dto.setEntranceExam(app.getEntranceExam());
            dto.setEntranceExamScore(app.getEntranceExamScore());
            dto.setPaymentDone(app.getPaymentDone());
            dto.setStatus(app.getStatus());
            return dto;
        }).collect(Collectors.toList());
    }
}
