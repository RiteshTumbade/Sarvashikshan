import { Dialog } from '@angular/cdk/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent {


  todo = [''];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor(public dialog: Dialog) {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '100%',
      height: '100%',
    });


  }

  // userstory : Userstory[] ;

  // tasks: Tasks[] = [];

  // inprogress : Tasks[] = [] ;

  // testing : Tasks[] = [] ;

  // done : Tasks[] = [] ;




  // displayStyle = "none";

  // openPopup() {

  //     this.displayStyle = "block";

  // }
  // closePopup() {
  //   this.displayStyle = "none";
  // }

  // openDialog(){
  //   this.dialog.open(DialogComponent, {
  //     width : '30%'  

  //   }).afterClosed().subscribe(val=>{
  //     if(val === 'save'){
  //       this.getTask() ;
  //     }
  //   })
  // }

  //popoig update 

  // editTask(row : any){
  //   this.dialog.open(DialogComponent ,{
  //     width : '30%' ,
  //     data : row 
  //   }).afterClosed().subscribe(val=>{
  //     if(val === 'update'){
  //       this.getTask() ;
  //     }
  //   })
  // }

  // showTaskDetail(row : any){
  //   this.dialog.open(MouseOverComponent ,{
  //     width : '30%' ,
  //     data : row 
  //   }).afterClosed().subscribe(val=>{
  //     if(val === 'update'){
  //       this.getTask() ;
  //     };
  //   })
  // }

  // deleteTask(id : number){
  //   this.taskService.deleteTask(id).subscribe({
  //     next : (res) => {
  //       // alert("task Deleted");
  //       this.getTask();
  //     },error : ()=>{
  //       alert("error While Delecting Record");
  //     }
  //   })
  // }


}
