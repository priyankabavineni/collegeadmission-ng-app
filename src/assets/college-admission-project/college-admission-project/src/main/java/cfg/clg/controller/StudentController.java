package cfg.clg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cfg.clg.dto.StudentDTO;
import cfg.clg.entity.ApplicationEntity;
import cfg.clg.service.StudentService;

@RestController
@RequestMapping("/student")
public class StudentController {

	@Autowired
	private StudentService studentService;

	@PostMapping("/save")
	public String saveStudent(@RequestBody StudentDTO student) {

		return studentService.saveStudent(student);
	}

	@GetMapping("/status")
	public List<ApplicationEntity> getApplicationStatus(@RequestParam int sid) {
		return studentService.getApplicationsByStudentId(sid);
	}
}
