import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public desc: string,
    public isDone: boolean,
    public targetDay: Date
  ) {
    
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
  
  todos = [
    new Todo(1,'desc1',false,new Date()),
    new Todo(2,'desc2',false,new Date())
    // {id:1,desc:'desc1'},
    // {id:2,desc:'desc2'},
    // {id:3,desc:'desc3'}


  ];
  
  // todo = {
  //   id : 1,
  //   desc : 'Learn to angular 7'
  // }
  constructor() { }

  ngOnInit() {
  }

}
