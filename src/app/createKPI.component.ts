import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { kpiService } from "./kpi.service";

@Component({
    selector:'app-kpi',
    templateUrl:'./createKPI.component.html',
    styleUrls:['./createKPI.component.css']
})

export class CreateKPI implements OnInit{
    dep:any=[];
    pers:any=[];
    datac:any=[];
    review:any=[];
    typearray:any=[];
    category:any=[];
    year:any=[];

    x!:any;
    y!:any

    constructor(private fb:FormBuilder,private ks:kpiService){}
    ngOnInit(): void {
        this.dept();
        this.perspective();
        this. datacf();
        this.reviewf();
        this.type();
        this.getCategory();
        this.financialYear();

        

        
        
    }

 

    kpiForm = this.fb.group(
        {
            title: ['',[Validators.required]],  
            departmentId: ['',[Validators.required]],    
            dataCaptureFrequency:['',[Validators.required]],
            reviewFrequency:['',[Validators.required]],
            goalDescription:[''],
            perspective:['',[Validators.required]],
            remark:[''],
            annualTarget: 100,
            actionLimit: 'MANUAL',  
            category: '',
            isTypeKPI: true,
            type: '',
            parentId: null,
            perspectivePrefix: 'I',
            directionOfGoodness: 'Up',
            ytdCalculation: 'SUM',
            weightage: 1,
            captureData: [
                    [{
                        target: 0,
                        lower: 0,
                        upper: 0,
                        startDate: '2022-05-01T00:00:00',
                        endDate: '2022-05-31T23:59:59',
                        indicator: 2,
                        disabled: false,
                        upperValueType: 'ABSOLUTE',
                        lowerValueType: 'ABSOLUTE'
                    }]
            ],
            unitOfMeasurement: '606573e173d7e41e2e59a4ab',
            goalFormula: null,
            isActive: true,
            owners: {
                individuals: [
                        {
                            employeeId: 'ganesh.gaikwad',
                            isPrimary: true
                        }
                    ]
                },
                viewers: {
                    individuals: [],
                    groups: []
                },
            financialYearStart: 1648751400000,
            financialYearEnd: 1680287399000,
            dataAggregationFrequency: '62833d7b412ac9eebe3a3c17',
            dataAggregationMethod: 'SUM'
      });

    

    submit(){
        //console.log(this.dep)
        //this.x=JSON.stringify(this.kpiForm.value);
        let a=JSON.stringify(this.kpiForm.value)

        console.log(a)

        this.ks.craeteKpi(this.kpiForm.value).subscribe((data)=>{
            console.log("succes");
        }),
        (err:any)=>{
            console.log("err")
        }

        console.log(this.typearray)

        this.kpiForm.reset();

    }

    dept(){
        return  this.ks.dept().subscribe(({response})=>
      this.dep=response
      
     
        )
    }

    perspective(){
        return this.ks.perspective().subscribe(({response})=>
        this.pers=response
        
          )
    }

    datacf(){
        return this.ks.datacf().subscribe(({response})=>
        //console.log(x)
        this.datac=response
        
          )

    }

    reviewf(){
        return this.ks.reviewf().subscribe(({response})=>

            this.review=response
        )
    }

    

    onChange(e:any){
  
       this.y=e.target.value;
       console.log("y ="+this.y )

      let c= this.datac.find((a:any)=>{
           return a._id==this.y
          
       }).order

        console.log(c)

       this.review= this.review.filter(
        (x:any)=>{
            // console.log(x)
            // console.log("hii"+this.y)  || (x.order)>=this.y-1
           if(x.order>=c ) {
            console.log(x.value)
               return x.value;
             }
        } )
    }

    type(){
        //console.log(this.typearray);
        return this.ks.type().subscribe(({response})=>
         this.typearray=response
        
    )
    }

    getCategory(){
        return this.ks.category().subscribe(({response})=>
        this.category=response
       
   )
    }

    financialYear(){
        return this.ks.fystart().subscribe(({response})=>{
            this.year=response
        })
    }


    

}