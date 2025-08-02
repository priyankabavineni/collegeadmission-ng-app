package cfg.clg.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(schema = "collegeadmissionsystem", name = "student")
public class StudentEntity {
	@Id
	private int sid;

	private String sname;
	private String email;

	// One student can have many applications
	@OneToMany(mappedBy = "student")
	@JsonBackReference
	private List<ApplicationEntity> applications;
}

