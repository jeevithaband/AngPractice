import { Component, OnInit } from '@angular/core';
import { TudoserviceService } from '../tudoservice.service';


@Component({
  selector: 'app-servicecompo',
  templateUrl: './servicecompo.component.html',
  styleUrls: ['./servicecompo.component.scss']
})
export class ServicecompoComponent implements OnInit {
 

  constructor(private tudoservice:TudoserviceService) { }

  ngOnInit() {
    this.tudoservice.getTodos().subscribe((data:any)=>{
       console.log(data)
    })
  }

}
