import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
 @Input() teacherData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
