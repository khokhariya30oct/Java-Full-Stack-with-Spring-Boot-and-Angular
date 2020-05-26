/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.webservices.todo.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.rest.webservices.todo.dto.TodoDto;
import org.springframework.stereotype.Service;

/**
 *
 * @author ashish
 */

@Service
public class TodoService {
    public static List<TodoDto> todos = new ArrayList();
    public static Integer todoId = 0;
    static {
        todos.add(new TodoDto(++todoId,"A","a",new Date(),false));
        todos.add(new TodoDto(++todoId,"B","b",new Date(),false));
        todos.add(new TodoDto(++todoId,"C","c",new Date(),false));
    }
    
    public TodoDto createOrUpdate(TodoDto todoDto) {
        if (todoDto.getId() == -1) {
            todoDto.setId(++todoId);
            todos.add(todoDto);            
       }
        else{
            deleteTask(todoDto.getId());
            todos.add(todoDto);
        }
        return todoDto;
    }
    
    public List<TodoDto> findAll() {
        return todos;
    }
    
    public TodoDto deleteTask(Integer id) {
        TodoDto todo = findById(id);
        if(todo != null) {
            todos.remove(todo);
            return todo;
        }
        return null;
    }

    public TodoDto findById(Integer id) {
        for(TodoDto todo : todos) {
            if(todo.getId() == id) {
                return todo;
            }            
        }
        return null;
    }
}
