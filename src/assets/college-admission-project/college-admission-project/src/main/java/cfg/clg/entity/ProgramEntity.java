package cfg.clg.entity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(schema = "collegeadmissionsystem", name = "program")
public class ProgramEntity {
	@Id
	private int programId;

	private String program;
	private String department;

	// One program can have many applications
	@OneToMany(mappedBy = "program")
	@JsonBackReference
	private List<ApplicationEntity> applications;
}
