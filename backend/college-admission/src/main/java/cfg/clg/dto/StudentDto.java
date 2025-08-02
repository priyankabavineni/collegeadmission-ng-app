package cfg.clg.dto;

import lombok.Data;

@Data
public class StudentDto {
    private int sid;
    private String sname;
    private String email;
    private String password;
    private String role;
    

    private double tenthMarks;   // NEW
    private double interMarks;   // NEW
}
