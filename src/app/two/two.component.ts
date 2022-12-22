import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  @Input() ParentTochild :any;
  @Output() fromChild = new EventEmitter()
  constructor() { }

    name = 'jeevitha'
  
  childToParent(){
    this.fromChild.emit(this.name)
  }
  ngOnInit(): void {
  }

}
