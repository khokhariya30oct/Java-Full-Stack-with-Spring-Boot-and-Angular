import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  
  todo : Todo
  id : Number
  constructor(
    private todoService : TodoDataService,
    private route : ActivatedRoute,
    private navigateRoute : Router

  ) { }

  ngOnInit() {
    // before Getting response ,it will start rendering componenet.html
    this.todo = new Todo(1,'',false,new Date());
    this.id = this.route.snapshot.params['id'];
    if(this.id != -1) {
      this.todoService.retrieveById('Ashish',this.id).subscribe(
        (res) => {this.todo = res},
        (error) => {console.log(error)}      
      )
    }    
  }

  saveTodo() {
    if (this.id == -1) {
      this.todo.id = -1;
      this.todoService.saveTask('Ashish',this.todo).subscribe(
        (res) => {console.log(res)},
        (err) => {console.log(err)}
      )
    }
    else {
      this.todoService.updateTask('Ashish', this.todo.id, this.todo).subscribe(
        data => {
          console.log(data);          
        }
      )
    }
    this.navigateRoute.navigate(['todos'])
  }

}
