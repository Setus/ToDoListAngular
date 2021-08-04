import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  myApi : ApiService;
  itemsList : Item[];
  biggestItemId : number = -1;

  constructor(myApi : ApiService) {
    this.myApi = myApi;
    this.itemsList = myApi.GetAllItems();
    this.calculateHighestItemId();
  }

  calculateHighestItemId() {
    if (this.itemsList.length > 0) {
      this.itemsList.forEach((item) => {
        if (item.getItemId() > this.biggestItemId) {
          this.biggestItemId = item.getItemId();
        }
      });
    }
  }

  getAllItems() : Item[] {
    return this.itemsList;
  }

  addNewItem(newItemName : string) : void {
    this.biggestItemId++;
    let newItem : Item = new Item(this.biggestItemId, newItemName, false);
    console.log("Adding a new item with properties " + newItem.toString());
    this.itemsList.push(newItem);
  }

  // updateItem(updatedItem : Item) : void {
  //   console.log("Updating item with properties " + updatedItem.toString());
  //   let oldItemIndex = this.itemsList.findIndex((item, index, array) => {
  //     return item.getItemId() === updatedItem.getItemId();
  //   });
  //   this.itemsList[oldItemIndex] = updatedItem;
  //   console.log("Array:" + this.itemsList);
  // }

  deleteItem(deletedItem : Item) : void {
    console.log("Deleting item with properties " + deletedItem.toString());
    let itemIndex = this.itemsList.findIndex((item, index, array) => {
      return item.getItemId() === deletedItem.getItemId();
    });
    this.itemsList.splice(itemIndex, 1);
  }



}
