import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../app.component.css']
})
export class ListComponent implements OnInit {

  itemService : ItemService;
  items : Item[];

  constructor(itemService : ItemService) {
    this.itemService = itemService;
    this.items = itemService.getAllItems();
   }

  ngOnInit(): void {
  }

}
