package cfg.clg.controller;

import lombok.Data;

@Data
public class ResponseData<T> {
	 private String status;
	    private String message;
	    private T data;

}
