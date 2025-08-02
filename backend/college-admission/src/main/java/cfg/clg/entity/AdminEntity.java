package cfg.clg.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(schema = "collegeadmissionproject", name = "collegeadmin")
public class AdminEntity {

	@Id
	private int adminId;

	@Column
	private String adminname;
	

	
}
