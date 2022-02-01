import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';

  constructor() {
    this.testFunction1();
    this.testFunction3();
  }

  testFunction1() {
    console.log("test function 1")
  }

  testFunction3() {
    console.log("test function")
  }
}
