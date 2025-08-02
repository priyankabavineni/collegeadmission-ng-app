package cfg.clg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cfg.clg.entity.ApplicationEntity;


@Repository
public interface ApplicationRepository extends JpaRepository<ApplicationEntity, String> {

	List<ApplicationEntity> findByStudentSid(int sid);

}
