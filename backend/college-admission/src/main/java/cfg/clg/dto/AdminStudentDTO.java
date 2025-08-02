package cfg.clg.dto;

import java.util.List;

import lombok.Data;
@Data	
public class AdminStudentDTO {
	
	 private int sid;
	    private String sname;
	    private String email;
	    private Double tenthMarks;
	    private Double interMarks;
	    private Boolean entranceExam;
	    private Integer entranceExamScore;
	    private List<ApplicationResponseDto> applications;

}
