import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
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
  @ViewChild('editItemField')
  editItemField!: ElementRef;

  editing : boolean = false;

  constructor(itemService : ItemService) {
      this.itemService = itemService;
   }

  ngOnInit(): void {
    // this.items = this.itemService.GetAllItems();
  }

  updateItemDone() {
    this.itemService.updateItem(new Item(this.item.itemId, this.item.itemName, !this.item.done));
  }

  deleteItem() {
    this.itemService.deleteItem(this.item);
  }

  editItem() {
    this.editing = true;
    setTimeout(() => { // this will make the execution after the above boolean has changed
      this.editItemField.nativeElement.focus();
    }, 0);
  }

  saveItem() {
    this.editing = false;
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    let newItemName : string = f.value.editItemField;
    if (newItemName !== undefined && newItemName !== '' && newItemName.trim() !== '') {
      this.itemService.updateItem(new Item(this.item.itemId, f.value.editItemField, this.item.done));
      this.editing = false;
    }
  }

}
