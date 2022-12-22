import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  inputTodo: string = '';
  todoData :any =[];
  currentItem :any;
  currentIndex : number= 0;
  updatedStatus :string ='';
  updatedTitle:string = '';
  constructor(private todoservice:TodolistService) { }

  addTodo(){
   if(this.inputTodo != ''){
    this.todoservice.addTodo(this.inputTodo);
    this.inputTodo='';
   }
  }
  deleteTodo(i:any){
   this.todoservice.deleteTodo(i);
  }
  editTodo(i:any){
   this.currentItem = this.todoData[i];
   this.updatedTitle = this.currentItem['title'];
   this.updatedStatus = this.currentItem.status;
      // both the syntax are same
   this.currentIndex = i;
  }
  update(){
    let data={
      title : this.updatedTitle,
      status : this.updatedStatus
    }
    if(data){
     this.todoservice.updateTodo(data,this.currentIndex);
    //  this.todoData = this.todoservice.getTododata();
    }
    console.log('test')
  }
  ngOnInit(): void {
    // this.todoData=this.todoservice.getTododata();
    this.todoservice.getTododata().subscribe((d:any)=>{
      this.todoData = d.data;
      this.todoservice.todoData = d.data;
        // 49line is for sending data to service for update and delete
    });
  }

}
