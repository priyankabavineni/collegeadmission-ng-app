package cfg.clg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cfg.clg.dto.ApplicationDto;
import cfg.clg.entity.ApplicationEntity;
import cfg.clg.entity.StudentEntity;
import cfg.clg.repo.ApplicationRepository;
import cfg.clg.repo.StudentRepository;
import cfg.clg.service.ApplicationService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService appService;

    @Autowired
    private StudentRepository studentRepo;

    @Autowired
    private ApplicationRepository appRepo;

    @PostMapping("/apply")
    public ApplicationDto apply(@RequestBody ApplicationDto dto) {
        // Ensure student exists
        StudentEntity student = studentRepo.findById(dto.getSid())
            .orElseThrow(() -> new RuntimeException("Student not found with ID: " + dto.getSid()));

        ApplicationEntity entity = new ApplicationEntity();
        entity.setStudent(student);
        entity.setProgram(dto.getProgram());
        entity.setDepartment(dto.getDepartment());
        entity.setStatus("Pending");
        entity.setEntranceExam(dto.getEntranceExam());
        entity.setEntranceExamScore(dto.getEntranceExamScore());
        entity.setPaymentDone(dto.getPaymentDone());

        // Set generated applicationId and status back to DTO
        dto.setApplicationId(entity.getApplicationId());
        dto.setStatus(entity.getStatus());

        appRepo.save(entity);
        

        return dto;
    }

    @GetMapping("/student/{sid}")
    public List<ApplicationDto> getByStudent(@PathVariable int sid) {
        return appService.getByStudent(sid);
    }

    @GetMapping("/all")
    public List<ApplicationDto> getAllApplications() {
        return appService.getAllApplications();
    }
}
