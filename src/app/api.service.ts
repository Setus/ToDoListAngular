import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Item } from './item';
import { ItemInterface } from './iteminterface';


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

  constructor(private httpClient: HttpClient) { }

  GetAllItems() : Item[] {
    let itemsList : Item[] = [];
    this.httpClient.get<ItemInterface[]>(this.getUrl)
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

  public get(url: string, options?: any) { 
    return this.httpClient.get(url, options); 
  } 
  
  public post(url: string, data: any, options?: any) { 
    return this.httpClient.post(url, data, options); 
  } 
  
  public put(url: string, data: any, options?: any) { 
    return this.httpClient.put(url, data, options); 
  } 
  
  public delete(url: string, options?: any) { 
    return this.httpClient.delete(url, options); 
  } 
}
