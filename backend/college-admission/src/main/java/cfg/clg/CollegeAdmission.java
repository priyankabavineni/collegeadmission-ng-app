package cfg.clg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("cfg.clg")
      
public class CollegeAdmission {

	public static void main(String[] args) {
		SpringApplication.run(CollegeAdmission.class, args);
	}

}
