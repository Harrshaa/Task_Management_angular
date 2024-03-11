import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BoardService } from '../services/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrl: './new-board.component.css'
})
export class NewBoardComponent {
  constructor(private dialogRef:MatDialogRef<NewBoardComponent>, 
    public boardService:BoardService,
    private router:Router){}
    

  ngOnInit():void {}

  title:string="";

  close(){
    this.dialogRef.close();
  }

  create(){
    this.boardService.createBoard(this.title);
    this.router.navigate(['/view-board',this.boardService.boards.length - 1]);
    this.dialogRef.close();
  }

}
