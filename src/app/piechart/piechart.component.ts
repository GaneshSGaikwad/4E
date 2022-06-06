import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  @Input() treedata:any=[];

  constructor() {
   
   }

  ngOnInit(): void {

    let result = (({ notDefinedKPI, notMonitored, achieved, onTrack,notOnTrack,kpiMonitored  }) => ({ notDefinedKPI,notMonitored, achieved, onTrack,notOnTrack,kpiMonitored }))(this.treedata);

    console.log(result)

    this.pieChartLabels= Object.keys(result)

    this.pieChartData[0].data=Object.values(result);
  
  }


  // ADD CHART OPTIONS. 
  pieChartOptions = {
    responsive: true
}

pieChartLabels =  ['notDefinedKPI', 'notMonitored', 'achieved', 'onTrack','notOnTrack','kpiMonitored'];

// CHART COLOR.
pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
        ]
    }
]


pieChartData:any = [
    { 
        data: {}
    }
];

pieData=[{
    notDefinedKPI:this.treedata
  }];


onChartClick(event:any) {
  console.log(event);
}
  



 


}
