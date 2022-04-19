import { Component } from '@angular/core';


@Component({
  selector: 'td-root',
  template: `
  <div>
      <td-todo-list></td-todo-list>
  </div>
  `
})
export class AppComponent {
  title = 'Todo App';
}
