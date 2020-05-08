import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardService } from '../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  age: number;
  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
   this.cardService.addData(f.value);
   this.router.navigate(['/']);
  }
}
