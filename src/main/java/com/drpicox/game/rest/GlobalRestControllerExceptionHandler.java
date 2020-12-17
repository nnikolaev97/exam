package com.drpicox.game.rest;

import com.google.gson.Gson;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;

@ControllerAdvice
public class GlobalRestControllerExceptionHandler {

    @ExceptionHandler(GlobalRestException.class)
    public ResponseEntity badRequest(GlobalRestException exception) {
        var body = new HashMap<String,String>();
        body.put("message", exception.getMessage());
        return new ResponseEntity(
                body,
                new HttpHeaders(),
                HttpStatus.BAD_REQUEST
        );
    }
}
