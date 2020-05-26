import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { URL_API } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http : HttpClient
  ) { }

  retrieveAll(username) {
    // let header = new HttpHeaders({
    //   Authorization : this.generateAuthHeaderString()
    // })
    return this.http.get<Todo[]>(`${URL_API}/users/${username}/todos`,
    // {headers : header}
    );
  }

  deleteTask(username,id) {
    return this.http.delete(`${URL_API}/users/${username}/todos/${id}`);
  }

  updateTask(username,id,todo) {
    return this.http.put(
      `${URL_API}/users/${username}/todos/${id}`
      ,todo);
  }

  saveTask(username,todo) {
    return this.http.post(`${URL_API}/users/${username}/todos`,todo);
  }


  retrieveById(username,id) {
    return this.http.get<Todo>(`${URL_API}/users/${username}/todos/${id}`);
  }

  // generateAuthHeaderString() {
  //   let username = 'user';
  //   let password= 'password';
  //   let headerString = 'Basic ' + window.btoa(username  +':' + password)
  //   return headerString;
  // }

}
