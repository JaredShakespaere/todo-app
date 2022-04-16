import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [
    './todo-list.component.css',
    '../todo/todo.component.css',
    '../sort/sort.component.css',
  ],
})
export class TodoListComponent {
  cardHeightAndWidth: number = 13;
  cardMargin: number = 3;

  sortByTitle: boolean = false;
  sortByDate: boolean = false;

  todos: any[] = [
    {
      todoId: 1,
      todoTitle: 'interview prep',
      todoDueDate: new Date(2022, 3, 19),
      todoDescription:
        'Hampr. Compile necessary documents. Go over the job description.',
      todoTags: ['interview', 'work'],
    },
    {
      todoId: 2,
      todoTitle: 'laundry',
      todoDueDate: new Date(2022, 3, 17),
      todoDescription: 'one load of colors and one of whites',
      todoTags: ['cleaning'],
    },
    {
      todoId: 3,
      todoTitle: 'easter stuff',
      todoDueDate: new Date(2022, 3, 21),
      todoDescription: 'dye eggs, hide eggs in the yard, get ci more candy',
      todoTags: ['family'],
    },
  ];
  originalArr: any = this.todos.map;

  sortTitle(): any {
    this.sortByTitle = !this.sortByTitle;

    if (this.sortByTitle) {
      this.todos.sort((a, b) => a.todoTitle.localeCompare(b.todoTitle));
      return this.todos;
    } else if(!this.sortByTitle){
      this.todos.sort((a,b) => b.todoTitle.localeCompare(a.todoTitle));
      return this.originalArr.todoTitle;
    }
  }

  sortDate(): any {
    this.sortByDate = !this.sortByDate;
      if(this.sortByDate) {
        this.todos.sort((a,b) => a.todoDueDate - b.todoDueDate)
        return this.todos;
      } else {
        this.todos.sort((a, b) => b.todoDueDate - a.todoDueDate);
        return this.originalArr.todoDueDate;
      }
  }
}
