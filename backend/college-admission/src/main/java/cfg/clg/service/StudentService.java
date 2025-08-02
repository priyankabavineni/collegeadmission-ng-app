package cfg.clg.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cfg.clg.dto.StudentDto;
import cfg.clg.entity.StudentEntity;
import cfg.clg.repo.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepo;

    public StudentDto register(StudentDto dto) {
        StudentEntity entity = new StudentEntity();
        entity.setSname(dto.getSname());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setRole("STUDENT");
        entity.setTenthMarks(dto.getTenthMarks());     // NEW
        entity.setInterMarks(dto.getInterMarks());     // NEW
        studentRepo.save(entity);
        dto.setSid(entity.getSid());
        return dto;
    }

    public StudentDto login(String email, String password) {
        Optional<StudentEntity> student = studentRepo.findByEmail(email);
        if (student.isPresent() && student.get().getPassword().equals(password)) {
            StudentDto dto = new StudentDto();
            StudentEntity s = student.get();
            dto.setSid(s.getSid());
            dto.setEmail(s.getEmail());
            dto.setSname(s.getSname());
            dto.setRole(s.getRole());
            dto.setTenthMarks(s.getTenthMarks());   // NEW
            dto.setInterMarks(s.getInterMarks());   // NEW
            return dto;
        }
        return null;
    }
    
    public List<StudentDto> getAllStudents() {
        return studentRepo.findAll().stream().map(student -> {
            StudentDto dto = new StudentDto();
            dto.setSid(student.getSid());
            dto.setSname(student.getSname());
            dto.setEmail(student.getEmail());
            dto.setRole(student.getRole());
            return dto;
        }).collect(Collectors.toList());
    }

}
