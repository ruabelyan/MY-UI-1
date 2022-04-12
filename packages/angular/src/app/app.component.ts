import { Component } from '@angular/core';
import * as Test from '@my-ui/core';
console.log('🚀 ~ file: app.component.ts ~ line 3 ~ Test', Test);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  buttonClassName = 'test';
}
