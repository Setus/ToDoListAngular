import { Component } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  errorService : ErrorService;

  constructor(errorService : ErrorService) {
    this.errorService = errorService;
  }

  getServerAvailability() : boolean {
    return this.errorService.getServerAvailability();
  }

}
