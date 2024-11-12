import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CollectionType } from 'src/app/core/types/collection-type';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss'],
})
export class CollectionListComponent  implements OnInit {

  constructor(private _userService: UserService) { }
  public collectionList!: Array<CollectionType>;

  ngOnInit() {
    this._userService.populateUser();
    this.collectionList = this._userService.user.collections;
  }

}
