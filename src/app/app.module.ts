import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { CardService } from './services/card.service';
import { CardFormComponent } from './card-form/card-form.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookoverviewComponent } from './bookoverview/bookoverview.component';
import { HttpClientModule } from '@angular/common/http';
import { BookdetailComponent } from './bookdetail/bookdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardListComponent,
    CardComponent,
    CardFormComponent,
    BooklistComponent,
    BookoverviewComponent,
    BookdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
