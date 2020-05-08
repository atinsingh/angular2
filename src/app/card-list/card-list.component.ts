import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { CardModel } from '../models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cards: CardModel[];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
   this.cards =  this.cardService.getCards();
   console.log(this.cards);
  }

}
