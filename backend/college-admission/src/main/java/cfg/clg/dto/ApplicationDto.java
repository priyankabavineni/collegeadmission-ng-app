package cfg.clg.dto;

import lombok.Data;

@Data
public class ApplicationDto {
    private int applicationId;
    private int sid;
    private String program;
    private String department;
    private String status;

    private String entranceExam;
    private Double entranceExamScore;
    private Boolean paymentDone;
}
