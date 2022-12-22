import { Component, OnInit } from '@angular/core';
import { DairyserviceService } from '../dairyservice.service';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.scss']
})
export class DairyComponent implements OnInit {
  dairyData :any= [];
  inputData :string ='';
  constructor(private diarySer:DairyserviceService) { }
  addItem(){
    if(this.inputData!= ''){
      this.diarySer.addItem(this.inputData);
      this.inputData = ''
    }
    console.log(this.inputData)
  }
  ngOnInit(): void {
    this.dairyData = this.diarySer.getDairydata()
  }

}
