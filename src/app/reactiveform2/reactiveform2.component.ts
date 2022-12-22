import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform2',
  templateUrl: './reactiveform2.component.html',
  styleUrls: ['./reactiveform2.component.scss']
})
export class Reactiveform2Component implements OnInit {
 countries = ['india','uk','USA','Nepal']
 registrationForm :any;
  constructor(private fb:FormBuilder) {
    this.registrationForm = this.fb.group({
      name :['',[Validators.minLength(6),Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password:'',
      gender:'',
      country :'',
      dob:'',
      terms :''
    })
   }
   senddata(){
    console.log(this.registrationForm.value)
   }
   get registerFormErrors(){
    return this.registrationForm.controls
   }
  ngOnInit(): void {
  }

}
