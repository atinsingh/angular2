import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {BookModel} from '../models/book.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {

  book: BookModel;
  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id =  +this.route.snapshot.params[ 'id' ];
    console.log(id)
    this.route.params.subscribe(
      (param: Params) => {
        this.bookService.getBookById( +param['id']).subscribe(
          data => {
            this.book = data;
          }
        );
      }
    )
    this.bookService.getBookById(id).subscribe(
      data => {
        this.book = data;
      }
    );
  }

}
