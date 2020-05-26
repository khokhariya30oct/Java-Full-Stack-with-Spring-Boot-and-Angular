/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.webservices.todo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.rest.webservices.todo.dto.TodoDto;
import com.rest.webservices.todo.service.TodoService;
import java.net.URI;
import javax.websocket.server.PathParam;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 *
 * @author ashish
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {
    
    @Autowired
    public TodoService todoService;
    
    @GetMapping(path = "/users/{username}/todos")    
    public List<TodoDto> retrieveAll(@PathVariable String username) {      
        return todoService.findAll();
    }
    
    @GetMapping(path = "/users/{username}/todos/{id}")
    public TodoDto retrieveById(@PathVariable String username,@PathVariable Integer id) {
        return todoService.findById(id);
    }
    
    @PutMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<TodoDto> updateTodo (@PathVariable String username,@PathVariable Integer id
        ,@RequestBody TodoDto todo) {
        TodoDto todoDto = todoService.createOrUpdate(todo);
        return new ResponseEntity<TodoDto>(todoDto,HttpStatus.OK);
    }
    
    @PostMapping(path = "/users/{username}/todos")
    public ResponseEntity<TodoDto> saveTodo (@PathVariable String username,@RequestBody TodoDto todo) {
        TodoDto todoDto = todoService.createOrUpdate(todo);
        URI toUri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(todoDto.getId()).toUri();
        return ResponseEntity.created(toUri).build();
    }
    
    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username,@PathVariable Integer id){
        TodoDto dto = todoService.deleteTask(id);
        if (dto != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}