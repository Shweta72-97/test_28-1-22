import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';

  constructor() {
    this.testFunction2();
    this.testFunction3();
  }

  testFunction2() {
    console.log("test function 2")
  }

  testFunction3() {
    console.log("test function 3")
  }
}
