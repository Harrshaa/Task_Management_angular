import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.css'
})
export class NewCardComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<NewCardComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any, public boardService:BoardService){}

  ngOnInit() : void {
    console.log("this is the data:"+ this.data);
  }
  

  title:string="";
  tasksLoop:any=[false];
  tasks:Array<string>=[""];

  addTask(){
    this.tasks.push("");  
    console.log("hello all");
    this.tasksLoop.push(false);
  }

  deleteTask(index:any){
    this.tasks.splice(index,1);
    this.tasksLoop.splice(index,1);

  }

  close(){
    this.dialogRef.close();  
  }

  create(){
    this.boardService.boards[this.data].cards.push({
      title:this.title,
      checklist:this.tasks,
      status:this.tasksLoop
    });
    this.boardService.updateDataToLocalStorage();
    this.close();


  }

}
