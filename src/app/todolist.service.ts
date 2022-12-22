import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { TodoModel } from './shared/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  todoData : TodoModel[] =[]
  constructor(private http : HttpClient) { }
  getTododata(){
    // return this.todoData;
    return this.http.get('/assets/json/todo.json')
  }
  
  addTodo(input:any){
    this.todoData.push({
      title : input,
      status : 'created'
    })
  }
  deleteTodo(i:number){
    this.todoData.splice(i,1);
  }
  updateTodo(data:{title:string,status:string},index:number){
    let currentItem =this.todoData[index];
    currentItem.title = data.title,
    currentItem.status = data.status
  }
  
}
