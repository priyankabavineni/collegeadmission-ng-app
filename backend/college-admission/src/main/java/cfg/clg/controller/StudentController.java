package cfg.clg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cfg.clg.dto.StudentDto;
import cfg.clg.service.StudentService;

@RestController
@RequestMapping("/api/student")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/register")
    public StudentDto register(@RequestBody StudentDto dto) {
        return studentService.register(dto);
    }

    @PostMapping("/login")
    public StudentDto login(@RequestParam String email, @RequestParam String password) {
        return studentService.login(email, password);
    }
    
    @GetMapping("/all")
    public List<StudentDto> getAllStudents() {
        return studentService.getAllStudents();
    }

    
}