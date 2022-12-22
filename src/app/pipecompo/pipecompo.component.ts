import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecompo',
  templateUrl: './pipecompo.component.html',
  styleUrls: ['./pipecompo.component.scss']
})
export class PipecompoComponent implements OnInit {

  constructor() { }

  todayDate: Date = new Date();  
  amount: number =100;  
 message: string = "angular 8.0 is a Component Based Framework";  
  
  
  
  ngOnInit(): void {  
     
  }  

}
