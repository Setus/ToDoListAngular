import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Item } from './item';
import { ItemInterface } from './iteminterface';
import { Observable } from 'rxjs';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl : string = "https://localhost:50294/api/item/";
  private getUrl : string = this.baseUrl + "getall";
  private createUrl : string = this.baseUrl + "create";
  private updateUrl : string = this.baseUrl + "update";
  private deleteUrl : string = this.baseUrl + "delete";
  private deleteAllDoneUrl : string = this.baseUrl + "deletealldone";
  private httpHeaders : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  addNewItem(newItem : Item) : void {
    console.log("Calling addNewItem()");
    this.callCreateUpdateAPI(newItem, this.createUrl)
      .subscribe(
        result => console.log(result),
        error => this.handleError(error)
    );
  }

  updateItem(updatedItem : Item) : void {
    console.log("Calling updateItem()");
    this.callCreateUpdateAPI(updatedItem, this.updateUrl)
      .subscribe(
        result => console.log(result),
        error => this.handleError(error)
    );
  }

  getAllItems() : Item[] {
    console.log("Calling getAllItems()");
    let itemsList : Item[] = [];
    this.callGetAllAPI()
      .subscribe(
        (data : ItemInterface[]) => {
          data.forEach(item => {
            let newItem = new Item(item.itemId, item.itemName, item.done);
            console.log(newItem.toString());
            itemsList.push(newItem);
          });
        }, 
        error => this.handleError(error)
    );
    return itemsList;

    // return  [
    //   new Item(0, "Rice", false),
    //   new Item(1, "Apples", true),
    //   new Item(2, "Oranges", false)
    // ]
  }

  deleteItem(deletedItem : Item) : void {
    console.log("Calling deleteItem()");
    this.callDeleteAPI(deletedItem)
      .subscribe(
        result => console.log(result),
        error => this.handleError(error)
    );
  } 

  deleteAllDoneItems() : void {
    console.log("Calling deleteAllDoneItems()");
    this.callDeleteAllDoneAPI()
      .subscribe(
        result => console.log(result),
        error => this.handleError(error)
    );
  } 

  private callGetAllAPI() : Observable<ItemInterface[]> {
    return this.httpClient.get<ItemInterface[]>(this.getUrl);
  }

  private callCreateUpdateAPI(item : Item, url : string) : Observable<any> {
    return this.httpClient.post(url, JSON.stringify(item), {headers : this.httpHeaders});
  }

  private callDeleteAPI(item : Item) : Observable<any> { 
    return this.httpClient.delete(this.deleteUrl, 
      {
        headers : this.httpHeaders,
        body: JSON.stringify(item)
      }); 
  }

  private callDeleteAllDoneAPI() : Observable<any> { 
    return this.httpClient.delete(this.deleteAllDoneUrl, {headers : this.httpHeaders}); 
  }

  private handleError(error : Error) {
    console.log(error);
    this.errorService.setServerAvailability(false);
  }
}
