import { Component, OnInit } from '@angular/core';
import { kpiService } from '../kpi.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface TreeNode {
  primaryUserId: string;
  children?: TreeNode[];
}



@Component({
  selector: 'app-org-tree',
  templateUrl: './org-tree.component.html',
  styleUrls: ['./org-tree.component.css']
})


export class OrgTreeComponent implements OnInit {
  TREE_DATA:any= [
    {

    },

  ];

  constructor(private kpiService: kpiService,private router:Router,private http:HttpClient) {
    this.dataSource.data = this.TREE_DATA;
  }
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  treedata = [];

  ngOnInit(): void {
    this.treeDetails();
    
  }


  treeDetails() {
    this.kpiService.treeData().subscribe((data) => {
      this.treedata = data.response;
      console.log(data);
      this.getTreeData(this.treedata);
      
      this.dataSource.data = this.TREE_DATA;
     })
     }


  getTreeData(data: any[]) {
    let res: any[] = [];

    let map = new Map<string, number>();

    for (let i = 0; i < data.length; i++) {
      //console.log( map.set(data[i].primaryUserId, i))
      map.set(data[i].primaryUserId, i);
      data[i].children = [];
    }

    for (let i = 0; i < data.length; i++) {
      let node = data[i]
      //console.log(data[i].userHierarchy.split('/').length)
      if (data[i].userHierarchy.split('/').length != 1) {
        let temp: any = node.userHierarchy.split('/')
        // console.log(temp)
        let len = temp[temp.length - 2]
        // console.log(len)
        let a = map.get(len);
        // console.log(a)

        if (a)
          data[a].children.push(node)
      }

      else {
        // console.log('inside else')
        res.push(node)
      }

    }
    console.log(res);
    //return res;
     return this.TREE_DATA=res;
  }


  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length >= 0;

}
