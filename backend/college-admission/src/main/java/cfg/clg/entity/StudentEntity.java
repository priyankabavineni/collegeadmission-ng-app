package cfg.clg.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(schema = "collegeadmissionproject", name = "student")
public class StudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sid;

    private String sname;
    private String email;
    private String password;
    private double tenthMarks;   // NEW
    private double interMarks;   // NEW

    private String role = "STUDENT";
    
    
}
