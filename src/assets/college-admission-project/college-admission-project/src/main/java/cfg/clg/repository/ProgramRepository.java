package cfg.clg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cfg.clg.entity.ProgramEntity;


@Repository
public interface ProgramRepository extends JpaRepository<ProgramEntity, Integer>{

}
