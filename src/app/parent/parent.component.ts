import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  data = 'raja';
  newData :any;
  message(dat:any){
    this.newData = dat;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
