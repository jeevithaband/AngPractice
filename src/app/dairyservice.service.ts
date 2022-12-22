import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DairyserviceService {
  dairyData =[
    {
      title : 'Learn Angular Service',
      status :'Created'
    },
    {
      title:'gifts for presenting',
      status:'Created'
    },
    {
      title:'Go for Outing',
      status:'Completed'
    }
  ]
  getDairydata(){
    return this.dairyData;
  }
 addItem(input:any){
  this.dairyData.push({
    title:input,
    status: 'created'
  })
 }
  constructor() { }
}
