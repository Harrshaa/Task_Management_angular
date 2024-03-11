import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBoardComponent } from '../new-board/new-board.component';
import { BoardService } from '../services/board.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css'
})
export class BoardsComponent implements OnInit {

  constructor(private matDialog:MatDialog, public boardService:BoardService, private route:ActivatedRoute){}

    ngOnInit(): void{
      
    }

    openNewBoardDialog(){
      const dialogRef= this.matDialog.open(NewBoardComponent,{ 
        width:'500px'
      });
    }
    deleteBoard(index:any){
    this.boardService.boards.splice(index,1);
    this.boardService.updateDataToLocalStorage();
    }
  
  }
