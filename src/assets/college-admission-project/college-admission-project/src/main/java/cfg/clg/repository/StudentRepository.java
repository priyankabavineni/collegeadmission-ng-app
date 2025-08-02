package cfg.clg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cfg.clg.entity.StudentEntity;


@Repository
public interface StudentRepository extends JpaRepository<StudentEntity, Integer> {

}
