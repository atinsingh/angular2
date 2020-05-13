import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {BookService} from '../services/book.service';
import {BookModel} from '../models/book.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit, OnDestroy {

  books: BookModel[];
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(
      (data) => {
        this.books = data;
      }
    );
  }

  ngOnDestroy(): void {

  }



}
