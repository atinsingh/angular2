import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card: CardModel;
  constructor() { }

  ngOnInit(): void {
    console.log(this.card);
  }

}
