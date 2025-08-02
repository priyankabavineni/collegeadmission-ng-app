package cfg.clg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cfg.clg.entity.ApplicationEntity;
import cfg.clg.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@PutMapping("/update-status")
	public ApplicationEntity updateStatus(@RequestParam String applicationId, @RequestParam int adminId,
			@RequestParam String status // APPROVED or REJECTED
	) {
		return adminService.updateStatus(applicationId, adminId, status);
	}

	@GetMapping("/applications")
	public List<ApplicationEntity> viewAllApplications() {
		return adminService.getAllApplications();
	}

}
