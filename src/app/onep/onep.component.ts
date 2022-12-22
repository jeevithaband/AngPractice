import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onep',
  templateUrl: './onep.component.html',
  styleUrls: ['./onep.component.scss']
})
export class OnepComponent implements OnInit {
  text= 'jeevitha';
  names :any;
 message(data:any){
  this.names = data;
  console.log(this.names);
 }
  constructor() { }

  ngOnInit(): void {
  }

}
