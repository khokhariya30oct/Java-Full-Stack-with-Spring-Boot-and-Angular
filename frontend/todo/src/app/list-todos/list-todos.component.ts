import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public desc: string,
    public isDone: boolean,
    public targetDate: Date
  ) {
    
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
  
  todos : Todo[]
  statusMessage : String;

  // todos = [
  //   new Todo(1,'desc1',false,new Date()),
  //   new Todo(2,'desc2',false,new Date())
  //   // {id:1,desc:'desc1'},
  //   // {id:2,desc:'desc2'},
  //   // {id:3,desc:'desc3'}


  // ];
  
  // todo = {
  //   id : 1,
  //   desc : 'Learn to angular 7'
  // }
  constructor(
    private todoDataService : TodoDataService,
    private route : Router
  ) { }

  ngOnInit() {
    this.retrieveAll();
  }

  retrieveAll ( ) {
    this.todoDataService.retrieveAll('Ashish').subscribe(
      res => {
        console.log(res);
        this.todos = res;        
      },
      // error => {
      //   error = error.error.message;
      // }

    )
  }

  deleteTask(id) {
    this.todoDataService.deleteTask('Ashish',id).subscribe(
      res => {
        this.statusMessage = `Successfully deleted ${id}`;
        this.retrieveAll();
      },
      error => {}
    )
  }

  updateTask(id) {
      this.route.navigate(['todos',id])
  }

  addTodo(){
    this.route.navigate(['todos',-1])
  }

}
