import { Component } from '@angular/core';
// import { flatTreeControl,MatTreeNestedDataSource,MatTreeFlattener  } from "@angular/cdk/tree";


// interface ReleaseNode{
//   name:string;
//   children?:ReleaseNode[];

// }

// const Release_data:ReleaseNode[]=[];
@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent {
  isreleasesidenavbar=true;
  selectedDrawer=0;

  // nestedDataSource=new MatTreeNestedDataSource<>
}
