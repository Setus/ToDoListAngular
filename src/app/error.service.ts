import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private serverIsAvailable : boolean = true;  

  constructor() { }

  setServerAvailability(serverAvailability : boolean) {
    this.serverIsAvailable = serverAvailability;
  }

  getServerAvailability() {
    return this.serverIsAvailable;
  }
}
