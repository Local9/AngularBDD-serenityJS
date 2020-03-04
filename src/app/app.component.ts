import { Component } from '@angular/core';
import { WelcomeService } from './service/welcome.service';
import { Data } from './domain/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(welcomeService: WelcomeService) {
    welcomeService.getWelcome().subscribe((data: Data) => {
        this.title = data.message
    });
  }
}
