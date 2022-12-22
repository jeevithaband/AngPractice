import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() parentTochild :any;
  @Output() ChildToParent = new EventEmitter()
  roles = 'jeevi'
  getData(){
    this.ChildToParent.emit(this.roles)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
