import { Injectable } from '@angular/core';
import { UserType } from '../types/user-type';
import { Observable } from 'rxjs';
import { createFind } from 'rxjs/internal/operators/find';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usersList: Array<UserType> = [];
  private _user!: UserType;

  constructor() { }

  public get user(): UserType {
    return this._user;
  }
  public set user(value: UserType) {
    this._user = value;
  }

  public populateUser() {
    this._user = {
      id: "moi",
      email: "mail@fr",
      password: "pass", 
      pseudo: "pseudo",
      lastOpening: new Date(2024, 11, 8, 12, 10, 0),
      nbGems: 100,
      collections: [{
        id: 1,
        name: "animaux",
        nbCards: 5,
        cards: [{
          id: 1,
          name: "cerf",
          image: "image/animaux/cerf.png",
          rarity: 1,
          collectionId: 1,
          price: 10,
          nbOwned: 1 
        }, 
        {
          id: 2,
          name: "ours",
          image: "image/animaux/ours.png",
          rarity: 1,
          collectionId: 1,
          price: 10,
          nbOwned: 1 
        }, 
        {
          id: 3,
          name: "aigle",
          image: "image/animaux/aigle.png",
          rarity: 1,
          collectionId: 1,
          price: 10,
          nbOwned: 1 
        }, 
        {
          id: 4,
          name: "loup",
          image: "image/animaux/loup.png",
          rarity: 1,
          collectionId: 1,
          price: 10,
          nbOwned: 1 
        }, 
        {
          id: 5,
          name: "puma",
          image: "image/animaux/puma.png",
          rarity: 1,
          collectionId: 1,
          price: 10,
          nbOwned: 1 
        }]
      },
      {
        id: 2,
        name: "animaux 2",
        nbCards: 5,
        cards: [{
          id: 1,
          name: "cerf",
          image: "image/animaux/cerf.png",
          rarity: 1,
          collectionId: 1,
          price: 10,
          nbOwned: 1 
        }, 
        {
          id: 2,
          name: "ours",
          image: "image/animaux/ours.png",
          rarity: 1,
          collectionId: 1,
          price: 10,
          nbOwned: 1 
        }, 
        {
          id: 3,
          name: "aigle",
          image: "image/animaux/aigle.png",
          rarity: 1,
          collectionId: 1,
          price: 10,
          nbOwned: 1 
        }, 
        {
          id: 4,
          name: "loup",
          image: "image/animaux/loup.png",
          rarity: 1,
          collectionId: 1,
          price: 10,
          nbOwned: 1 
        }, 
        {
          id: 5,
          name: "puma",
          image: "image/animaux/puma.png",
          rarity: 1,
          collectionId: 1,
          price: 10,
          nbOwned: 1 
        }]
      }]
    };
  }

/*   public getOne(id: String) : Observable<UserType> {
    return 
  } */
}
