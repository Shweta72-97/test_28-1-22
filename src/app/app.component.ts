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
    this.testFunction2();
    this.testFunction3();

  }

  testFunction1() {
    console.log("test function 1")
  }


  testFunction2() {
    console.log("test function 2")
  }



  testFunction3() {
    console.log("test function 3")
  }
}
