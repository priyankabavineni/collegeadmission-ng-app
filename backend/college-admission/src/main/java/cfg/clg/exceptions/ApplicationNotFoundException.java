package cfg.clg.exceptions;

public class ApplicationNotFoundException extends RuntimeException{

	public ApplicationNotFoundException(String message) {

        super(message);

    }

	public ApplicationNotFoundException(int applicationId) {
		// TODO Auto-generated constructor stub
	}

}
