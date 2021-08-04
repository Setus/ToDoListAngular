import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  GetAllItems() : Item[] {
    return  [
      new Item(0, "Rice", false),
      new Item(1, "Apples", true),
      new Item(2, "Oranges", false)
    ]
  }
}
