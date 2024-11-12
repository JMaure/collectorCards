import { Component, Input, OnInit } from '@angular/core';
import { CardType } from 'src/app/core/types/card-type';
import { CollectionType } from 'src/app/core/types/collection-type';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent  implements OnInit {

  @Input()
  public collection!: CollectionType;

  constructor() { }

  ngOnInit() {
  }

}
