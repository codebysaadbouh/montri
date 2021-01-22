import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'montri';

  showGraphic : boolean = false

  func_showGraphic () {
    this.showGraphic = true
  }
}
