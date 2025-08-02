package cfg.clg.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import cfg.clg.entity.StudentEntity;

public interface StudentRepository extends JpaRepository<StudentEntity, Integer> {
    Optional<StudentEntity> findByEmail(String email);
}
