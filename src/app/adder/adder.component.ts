import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['../app.component.css']
})
export class AdderComponent implements OnInit {

  itemService : ItemService;

  constructor(itemService : ItemService, private changeDetection: ChangeDetectorRef) {
    this.itemService = itemService;
   }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    let newItemName : String = f.value.name;
    if (newItemName !== undefined && newItemName !== '' && newItemName.trim() !== '') {
      this.itemService.addNewItem(f.value.name);
      f.setValue({name : ''});
    }
  }

  deleteAllDone() {
    this.itemService.deleteAllDone();
    this.changeDetection.detectChanges();
  }

}
