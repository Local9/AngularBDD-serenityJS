import { Component } from '@angular/core';
import { WelcomeService } from './service/welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(welcomeService: WelcomeService) {
    welcomeService.getWelcome().then(
        data => this.title = data.message
      );
  }
}
