package cfg.clg.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cfg.clg.dto.StudentDTO;
import cfg.clg.entity.ApplicationEntity;
import cfg.clg.entity.StudentEntity;
import cfg.clg.repository.ApplicationRepository;
import cfg.clg.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository repo;

	public String saveStudent(StudentDTO student) {
		StudentEntity studentEntity = new StudentEntity();
    	BeanUtils.copyProperties(student,studentEntity);
    	repo.save(studentEntity);
		return "saved successfully";

	}

	@Autowired
	private ApplicationRepository applicationRepo;

	public List<ApplicationEntity> getApplicationsByStudentId(int sid) {
		return applicationRepo.findByStudentSid(sid);
	}

}