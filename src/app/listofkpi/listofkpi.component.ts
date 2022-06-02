import { Component, OnInit } from '@angular/core';
import { kpiService } from '../kpi.service';

@Component({
  selector: 'app-listofkpi',
  templateUrl: './listofkpi.component.html',
  styleUrls: ['./listofkpi.component.css']
})
export class ListofkpiComponent implements OnInit {

  constructor(private ks:kpiService) { }

  kpiList:any=[];

  ngOnInit(): void {
    this.createdKpi();
  }

  createdKpi(){
   return  this.ks.createdKpi().subscribe(({response})=>{
       this.kpiList=response
    })
//   return  this.ks.createdKpi().subscribe((data)=>{
//     console.log(data)
//  })
}

}
