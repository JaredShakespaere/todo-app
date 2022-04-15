import { Component } from '@angular/core';

@Component({
  selector: 'td-root',
  template: `
  <div>
    <h1>{{title}}</h1>
      <td-todo-list></td-todo-list>
  </div>
  `
})
export class AppComponent {
  title = 'Todo App';
}
