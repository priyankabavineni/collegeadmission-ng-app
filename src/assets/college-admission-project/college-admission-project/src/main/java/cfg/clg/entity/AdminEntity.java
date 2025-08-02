
package cfg.clg.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(schema = "collegeadmissionsystem", name = "collegeadmin")
public class AdminEntity {
	@Id
	private int adminId;

	private String status;
	
	@ManyToOne
	@JoinColumn(name = "sid", referencedColumnName = "sid")
	@JsonBackReference
	private StudentEntity student;

	// One admin can manage many applications
	@OneToMany(mappedBy = "admin")
    @JsonBackReference
	private List<ApplicationEntity> managedApplications;
}
