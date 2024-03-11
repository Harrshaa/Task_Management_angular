import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewCardComponent } from '../new-card/new-card.component';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';


@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrl: './view-board.component.css'
})
export class ViewBoardComponent implements OnInit{

  constructor(private dialog:MatDialog, private route:ActivatedRoute, 
    public boardService:BoardService) {}

  ngOnInit(): void {
    this.boardIndex=this.route.snapshot.paramMap.get('boardIndex')

      
  } 
  boardIndex:any=0;

  newCard(){
    this.dialog.open(NewCardComponent,{
      width:'500px',
      data:{boardIndex: this.boardIndex, editMode: false, cardIndex:-1}
    });
  }

  editCard(cardIndex:any){
    this.dialog.open(NewCardComponent,{
      width:'500px',
      data:{boardIndex: this.boardIndex, editMode: true, cardIndex: cardIndex}
    });
  }

}
