import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  template: `
   <todo-main></todo-main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
}
