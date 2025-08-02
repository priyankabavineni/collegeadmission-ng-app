package cfg.clg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import cfg.clg.dto.ApplicationDto;
import cfg.clg.service.ApplicationService;

@RestController
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/applicationsave")
    public ApplicationDto saveApplication(@RequestBody ApplicationDto dto) {
        return applicationService.processApplication(dto);
    }
}