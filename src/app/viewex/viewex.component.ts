import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewex',
  templateUrl: './viewex.component.html',
  styleUrls: ['./viewex.component.scss']
})
export class ViewexComponent implements OnInit {
  @ViewChild('txtname') mytxt!: ElementRef  
MyFunc(val: any) {  
  console.log(this.mytxt.nativeElement.value);  
} 
  constructor() { }
 
  ngOnInit(): void {
  }

}
