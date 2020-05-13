import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardFormComponent } from './card-form/card-form.component';
import {BooklistComponent} from './booklist/booklist.component';
import {BookdetailComponent} from './bookdetail/bookdetail.component';


const routes: Routes = [
  {
    path: '' , component: CardListComponent, pathMatch: 'full'
  },
  {
    path: 'add', component: CardFormComponent
  },
  {
    path: 'books', component: BooklistComponent, children : [
      {
        path: ':id', component: BookdetailComponent

      }
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
