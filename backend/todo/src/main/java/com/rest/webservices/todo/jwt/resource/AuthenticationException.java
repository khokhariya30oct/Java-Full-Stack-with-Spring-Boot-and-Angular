package com.rest.webservices.todo.jwt.resource;

public class AuthenticationException extends RuntimeException {
	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);
	}
}
