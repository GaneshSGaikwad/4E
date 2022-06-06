import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { kpiService } from "./kpi.service";
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { TokenStorageService } from "./token.service";



@Component({
    selector: 'app-kpi',
    templateUrl: './createKPI.component.html',
    styleUrls: ['./createKPI.component.css']
})

export class CreateKPI implements OnInit {

    dropdownList: any = [];
    selectedItems: any = [];
    dropdownSettings!: IDropdownSettings;

    dep: any = [];
    pers: any = [];
    datac: any = [];
    review: any = [];
    typearray: any = [];
    category: any = [];
    year: any = [];
    month: any = [];

    x!: any;
    y!: any;

    id!: number;

    Month!: any;
    empId!: any;

    //dropdown 

    selectedMonth!: number;

    constructor(private fb: FormBuilder, private ks: kpiService, private tokenService: TokenStorageService) { }
    ngOnInit(): void {
        this.dept();
        this.perspective();
        this.datacf();
        this.reviewf();
        this.type();
        this.getCategory();
        this.financialYear();
        this.selectMonth();

        //this.treeDetails();

        // this.empId=this.tokenService.decodeToken().employeeId;
        // console.log(this.empId)

    }

    list =
        [
            { id: 1, name: 'January' },
            { id: 2, name: 'February' },
            { id: 3, name: 'March' },
            { id: 4, name: 'April' },
            { id: 5, name: 'May' },
            { id: 6, name: 'June' },
            { id: 7, name: 'July' },
            { id: 8, name: 'August' },
            { id: 9, name: 'September' },
            { id: 10, name: 'Octomber' },
            { id: 11, name: 'November' },
            { id: 12, name: 'December' }
        ];

    kpiForm = this.fb.group(
        {
            title: ['', [Validators.required]],
            departmentId: ['', [Validators.required]],
            dataCaptureFrequency: ['', [Validators.required]],
            reviewFrequency: ['', [Validators.required]],
            goalDescription: [''],
            perspective: ['', [Validators.required]],
            remark: [''],
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
            captureData: this.fb.array(
                [

                ]
            ),



            unitOfMeasurement: '606573e173d7e41e2e59a4ab',
            goalFormula: null,
            isActive: true,
            owners: {
                individuals: [
                    {
                        employeeId: this.tokenService.decodeToken().employeeId,
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

    addCaptureData(id: any) {

        this.id = id.id;
        let x = this.getMonth();
        console.log(x)

        const cdform = this.fb.group({
            target: [''],
            lower: [''],
            upper: [''],
            startDate: [x.start + 'T00:00:00'],
            endDate: [x.end + 'T23:59:59'],
            indicator: [2],
            disabled: [false],
            upperValueType: ['ABSOLUTE'],
            lowerValueType: ['ABSOLUTE'],
        })
        this.Month = this.displayMonth();
        //console.log("id ="+this.id)

        //console.log(x);
        this.captureData.push(cdform);


    }

    get captureData() {
        return this.kpiForm.controls["captureData"] as FormArray;
    }



    submit() {
        //console.log(this.dep)
        //this.x=JSON.stringify(this.kpiForm.value);
        let a = JSON.stringify(this.kpiForm.value)
        console.log(a)


        this.ks.craeteKpi(a).subscribe((data) => {
            console.log("success");
            alert("KPI created successfully")
        }),
            (err: any) => {
                alert("KPI creation failed")
            }
        this.kpiForm.reset();
    }

    dept() {
        return this.ks.dept().subscribe(({ response }) =>
            this.dep = response
        )
    }

    perspective() {
        return this.ks.perspective().subscribe(({ response }) =>
            this.pers = response
        )
    }

    datacf() {
        return this.ks.datacf().subscribe(({ response }) =>
            //console.log(x)
            this.datac = response
        )
    }

    reviewf() {
        return this.ks.reviewf().subscribe(({ response }) =>
            this.review = response
        )
    }



    onChange(e: any) {

        this.y = e.target.value;
        console.log("y =" + this.y)

        let c = this.datac.find((a: any) => {
            return a._id == this.y
        }).order
        //console.log(c)
        this.review = this.review.filter(
            (x: any) => {
                // console.log(x)
                // console.log("hii"+this.y)  || (x.order)>=this.y-1
                if (x.order >= c) {
                    console.log(x.value)
                    return x.value;
                }
            })
    }

    type() {
        //console.log(this.typearray);
        return this.ks.type().subscribe(({ response }) =>
            this.typearray = response
        )
    }

    getCategory() {
        return this.ks.category().subscribe(({ response }) =>
            this.category = response
        )
    }

    financialYear() {
        return this.ks.fystart().subscribe(({ response }) => {
            this.year = response
        })
    }


    selectMonth() {
        this.ks.selectMonth().subscribe(({ response }) => {
            this.month = response
        })
        // this.ks.selectMonth().subscribe((data)=>{
        //     console.log(data)
        // })
    }



    removeData(index: number) {
        this.captureData.removeAt(index);
    }

    getMonth() {
        return this.month.find((x: any) => {
            let y = new Date(x.startUnix).getMonth();
            console.log(y)
            return y === (this.id - 1)
        })
    }

    clearData() {
        this.captureData.clear();
    }

    displayMonth() {
        return this.list.find((x) => {
            return x.id == this.id
        })
    }


    // treeDetails() {
    //     this.ks.treeData().subscribe((data) => {
    //         console.log(data.response);
    //     })
    // }



}