import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TokenStorageService } from '../token.service';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'app-department-list',
  templateUrl:'./dashboard.component.html',
  styles: [
  ]
})
export class Dashboard implements OnInit {

  

  constructor(private router:Router,private ds:DashboardService,private ts:TokenStorageService,private http:HttpClient) { }

 
   x=localStorage.getItem('user');
  

  ngOnInit(): void {

    if(this.ts.getToken()!=null){
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/login']);
    }

    
    this.draw();


    //new 

    this.http.get('./assets/sales.json', {responseType: 'json'}).subscribe(
      data => {
          this.pieChartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
          console.log (err.message);
      }
  );
    
  }

  logout(){
     this.ts.signOut();
     window.location.reload();
     //this.router.navigate(['/login']);
  }



  

   draw() {
    let canvas =  document.getElementById("canvas") as HTMLCanvasElement;
     let ctx:any = canvas.getContext("2d");
  
    
    let colors = ['#4CAF50', '#00BCD4', '#E91E63', '#FFC107', '#9E9E9E', '#CDDC39', '#18FFFF', '#F44336', '#FFF59D', '#6D4C41'];
    let angles = [Math.PI * 0.3, Math.PI * 0.7, Math.PI * 0.2, Math.PI * 0.4, Math.PI * 0.4];
    let offset = 10;
    let beginAngle = 0;
    let endAngle = 0;
    let offsetX, offsetY, medianAngle;
    
    for(let i = 0; i < angles.length; i = i + 1) {
      beginAngle = endAngle;
      endAngle = endAngle + angles[i];
      medianAngle = (endAngle + beginAngle) / 2;
      offsetX = Math.cos(medianAngle) * offset;
      offsetY = Math.sin(medianAngle) * offset;
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(200 + offsetX, 200 + offsetY);
      ctx.arc(200 + offsetX, 200 + offsetY, 120, beginAngle, endAngle);
      ctx.lineTo(200 + offsetX, 200 + offsetY);
      ctx.stroke();
      ctx.fill();
    }
  }


  // ADD CHART OPTIONS. 
  pieChartOptions = {
    responsive: true
}

pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

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
        data: [10,20,30,40,50]
    }
];

onChartClick(event:any) {
  console.log(event);
}
  
 


}
