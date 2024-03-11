import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { BoardsComponent } from './boards/boards.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { NewBoardComponent } from './new-board/new-board.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ViewBoardComponent } from './view-board/view-board.component';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NewCardComponent } from './new-card/new-card.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BoardsComponent,
    NewBoardComponent,
    ViewBoardComponent,
    NewCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
