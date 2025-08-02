///*package cfg.clg;
//
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.junit.jupiter.api.Assertions.assertThrows;
//
//import java.util.List;
//
//import cfg.clg.dto.ApplicationDto;
//import cfg.clg.entity.AdminEntity;
//import cfg.clg.entity.ApplicationEntity;
//import cfg.clg.entity.ProgramEntity;
//import cfg.clg.entity.StudentEntity;
//import cfg.clg.exception.AdminNotFoundException;
//import cfg.clg.exception.ProgramNotFoundException;
//import cfg.clg.exception.StudentNotFoundException;
//import cfg.clg.repository.AdminRepository;
//import cfg.clg.repository.ApplicationRepository;
//import cfg.clg.repository.ProgramRepository;
//import cfg.clg.repository.StudentRepository;
//import cfg.clg.service.ApplicationService;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//@SpringBootTest
//public class ApplicationTest {
//
//    @Autowired
//    private ApplicationService applicationService;
//
//    @Autowired
//    private ApplicationRepository applicationRepository;
//
//    @Autowired
//    private ProgramRepository programRepository;
//
//    @Autowired
//    private StudentRepository studentRepository;
//
//    @Autowired
//    private AdminRepository adminRepository;
//
//    private int testProgramId = 61;
//    private int testStudentId = 1;
//    private int testAdminId = 91;
//
//    @BeforeEach
//    void setup() {
//        applicationRepository.deleteAll();
//        programRepository.deleteAll();
//        studentRepository.deleteAll();
//        adminRepository.deleteAll();
//
//        // Create and save student
//        StudentEntity student = new StudentEntity();
//        student.setSid(testStudentId);
//        student.setSname("John Doe");
//        student.setEmail("john@example.com");
//        studentRepository.save(student);
//
//        // Create and save program
//        ProgramEntity program = new ProgramEntity();
//        program.setProgramId(testProgramId);
//        program.setProgram("B.Tech");
//        program.setDepartment("CSE");
//        programRepository.save(program);
//
//        // Create and save admin linked to student
//        AdminEntity admin = new AdminEntity();
//        admin.setAdminId(testAdminId);
//        admin.setStatus("active");
//        admin.setStudent(student);  // important if your mapping requires this
//        adminRepository.save(admin);
//    }
//
//    @Test
//    void testProcessApplication_success() {
//        ApplicationDto dto = new ApplicationDto();
//        dto.setApplicationId("APP100");
//        dto.setProgramId(testProgramId);
//        dto.setSid(testStudentId);
//        dto.setAdminId(testAdminId);
//
//        ApplicationDto result = applicationService.processApplication(dto); 
//
//        assertThat(result).isNotNull();
//        assertThat(result.getApplicationId()).isEqualTo("APP100");
//
//        List<ApplicationEntity> apps = applicationRepository.findAll();
//        assertThat(apps).hasSize(1);
//
//        ApplicationEntity savedApp = apps.get(0);
//        assertThat(savedApp.getStatus()).isEqualTo("applied");
//        assertThat(savedApp.getProgram().getProgramId()).isEqualTo(testProgramId);
//        assertThat(savedApp.getStudent().getSid()).isEqualTo(testStudentId);
//        assertThat(savedApp.getAdmin().getAdminId()).isEqualTo(testAdminId);
//    }
//
//    @Test
//    void testProcessApplication_programNotFound() {
//        ApplicationDto dto = new ApplicationDto();
//        dto.setApplicationId("APP101");
//        dto.setProgramId(9999); // invalid
//        dto.setSid(testStudentId);
//        dto.setAdminId(testAdminId);
//
//        assertThrows(ProgramNotFoundException.class, () -> applicationService.processApplication(dto));
//    }
//
//    @Test
//    void testProcessApplication_studentNotFound() {
//        ApplicationDto dto = new ApplicationDto();
//        dto.setApplicationId("APP102");
//        dto.setProgramId(testProgramId);
//        dto.setSid(9999); // invalid
//        dto.setAdminId(testAdminId);
//
//        assertThrows(StudentNotFoundException.class, () -> applicationService.processApplication(dto));
//    }
//
//    @Test
//    void testProcessApplication_adminNotFound() {
//        ApplicationDto dto = new ApplicationDto();
//        dto.setApplicationId("APP103");
//        dto.setProgramId(testProgramId);
//        dto.setSid(testStudentId);
//        dto.setAdminId(9999); // invalid
//
//        assertThrows(AdminNotFoundException.class, () -> applicationService.processApplication(dto));
//    }
//
//    @Test
//    void testGetAllApplications() {
//        // Add one application
//        ApplicationDto dto = new ApplicationDto();
//        dto.setApplicationId("APP104");
//        dto.setProgramId(testProgramId);
//        dto.setSid(testStudentId);
//        dto.setAdminId(testAdminId);
//
//        applicationService.processApplication(dto);
//
//        List<ApplicationEntity> apps = applicationService.getAllApplications();
//        assertThat(apps).isNotEmpty();
//        assertThat(apps.get(0).getApplicationId()).isEqualTo("APP104");
//    }
//}*/