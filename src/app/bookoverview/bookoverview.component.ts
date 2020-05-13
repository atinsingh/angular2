import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from '../models/book.model';

@Component({
  selector: 'app-bookoverview',
  templateUrl: './bookoverview.component.html',
  styleUrls: ['./bookoverview.component.scss']
})
export class BookoverviewComponent implements OnInit {

  @Input()
  book: BookModel;

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(id: number): void {
  //    this.router.navigate([id], {relativeTo: this.router})
  }

}
