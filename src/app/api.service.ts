import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Item } from './item';
import { ItemInterface } from './iteminterface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl : string = "https://localhost:50294/api/item/";
  getUrl : string = this.baseUrl + "getall";
  createUrl : string = this.baseUrl + "create";
  updateUrl : string = this.baseUrl + "update";
  deleteUrl : string = this.baseUrl + "delete";
  deleteAllDoneUrl : string = this.baseUrl + "deletealldone";
  httpHeaders : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  addNewItem(newItem : Item) : void {
    this.callCreateUpdateAPI(newItem, this.createUrl)
      .subscribe(result => {
        console.log(result);
      });
  }

  updateItem(updatedItem : Item) : void {
    this.callCreateUpdateAPI(updatedItem, this.updateUrl)
      .subscribe(result => {
        console.log(result);
      });
  }

  getAllItems() : Item[] {
    let itemsList : Item[] = [];
    this.callGetAllAPI()
      .subscribe((data : ItemInterface[]) => {
        data.forEach(item => {
          let newItem = new Item(item.itemId, item.itemName, item.done);
          console.log(newItem.toString());
          itemsList.push(newItem);
        });
      });
    return itemsList;

    // return  [
    //   new Item(0, "Rice", false),
    //   new Item(1, "Apples", true),
    //   new Item(2, "Oranges", false)
    // ]
  }

  deleteItem(deletedItem : Item) : void {
    this.callDeleteAPI(deletedItem)
      .subscribe(result => {
        console.log(result);
      });
  } 

  callGetAllAPI() : Observable<ItemInterface[]> {
    return this.httpClient.get<ItemInterface[]>(this.getUrl);
  }

  callCreateUpdateAPI(item : Item, url : string) : Observable<any> {
    return this.httpClient.post(url, JSON.stringify(item), {headers : this.httpHeaders});
  }

  callDeleteAPI(item : Item) : Observable<any> { 
    return this.httpClient.delete(this.deleteUrl, 
      {
        headers : this.httpHeaders,
        body: JSON.stringify(item)
      }); 
  } 
  
  // public put(url: string, data: any, options?: any) { 
  //   return this.httpClient.put(url, data, options); 
  // } 

}
