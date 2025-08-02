package cfg.clg.dto;

import lombok.Data;

@Data
public class ApplicationActionDto {
    private int applicationId;
    private int adminId;
    private String action;            
    private String rejectionReason;   
}