import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  RegistrationForm : any;
  constructor(private fb:FormBuilder) { 
    this.RegistrationForm = this.fb.group({
      email : '',
      phone: '',
      address : this.fb.group({
         state : '',
         zip : '',
      })
    })
  }
  
  sendData(){
    console.log(this.RegistrationForm.value)
   
  }

  ngOnInit(): void {
  }

}
