import { Component, Input, OnInit } from '@angular/core';
import { CardType } from 'src/app/core/types/card-type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input()
  public card!: CardType;

  constructor() { }

  ngOnInit() {}

}
