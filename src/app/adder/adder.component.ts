import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['../app.component.css']
})
export class AdderComponent implements OnInit {

  itemService : ItemService;

  constructor(itemService : ItemService) {
    this.itemService = itemService;
   }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value); 
    this.itemService.addNewItem(f.value.name);
    f.setValue({name : ''});
  }



}
