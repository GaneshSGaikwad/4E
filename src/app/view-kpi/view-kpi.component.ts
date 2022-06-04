import { Component, Input, OnInit } from '@angular/core';
import { kpiService } from '../kpi.service';

@Component({
  selector: 'app-view-kpi',
  templateUrl: './view-kpi.component.html',
  styleUrls: ['./view-kpi.component.css']
})
export class ViewKpiComponent implements OnInit {

  constructor(private ks:kpiService) { }

  ngOnInit(): void {

    this.viewKpi();
   
    


  }

  kpi:any=[];

  @Input() x:string='';

  


  viewKpi(){
  //     this.ks.createdKpi().subscribe((data)=>{
  //     console.log(data)
  //  })

  this.ks.createdKpi().subscribe(({response})=>{
    this.kpi=response
 })
  }


  displayKpi(){
   
     return this.kpi.filter((y:any)=>{
      if(y._id==this.x){
        return y;
      }
    })
  }
 

}
