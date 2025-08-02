package cfg.clg.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(schema = "collegeadmissionproject", name = "application")
public class ApplicationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int applicationId;

    private String program;
    private String department;
    private String status;
    private String rejectionReason;
    @Column(name = "entrance_exam")
    private String entranceExam;

    @Column(name = "entrance_exam_score")
    private Double entranceExamScore;

    @Column(name = "payment_done")
    private Boolean paymentDone;
    
    
    @ManyToOne
    @JoinColumn(name = "sid")
    private StudentEntity student;
    
    
    @ManyToOne
    @JoinColumn(name = "admin_id")
    private AdminEntity admin;

}
