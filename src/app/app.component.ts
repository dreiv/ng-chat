import { Component } from '@angular/core';

import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBlDHJA4YHsppM7m2Q4nOWNjVr7PvusYzA',
  databaseURL: 'https://ngchat-6dcba.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    firebase.initializeApp(config);
  }
}
