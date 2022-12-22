import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {
  collegeData={
    students :[{name:'gv'},{name:'sreeram'}],
    teachers:[{name:'rajiv'},{name:'ajay'}]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
