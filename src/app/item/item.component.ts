import { Component, OnInit, Input, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['../app.component.css']
})
export class ItemComponent implements OnInit {

  itemService : ItemService;
  
  @Input() item : Item = new Item(-1, "", false);

  editing : boolean = false;

  constructor(itemService : ItemService) {
      this.itemService = itemService;
   }

  ngOnInit(): void {
    // this.items = this.itemService.GetAllItems();
  }

  updateItemDone() {
    this.item.setDone(!this.item.getDone())
    // this.itemService.updateItem(this.item);
  }

  deleteItem() {
    this.itemService.deleteItem(this.item);
  }

  editItem() {
    this.editing = true;
  }

  saveItem() {
    this.editing = false;
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    let newItemName : string = f.value.editItemField;
    if (newItemName !== undefined && newItemName !== '' && newItemName.trim() !== '') {
      this.item.setItemName(f.value.editItemField);
      this.editing = false;
    }
  }

}
