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
export class TodoListComponent implements OnInit {
  cardHeightAndWidth: number = 13;
  cardMargin: number = 3;

  sortByTitle: boolean = false;
  sortByDate: boolean = false;
  todos: any[] = [
    {
      todoId: 1,
      todoTitle: 'interview prep',
      todoDueDate: 'April 16, 2022',
      todoDescription:
        'Hampr. Compile necessary documents. Go over the job description.',
      todoTags: ['interview', 'work'],
    },
    {
      todoId: 2,
      todoTitle: 'laundry',
      todoDueDate: 'April 18, 2022',
      todoDescription: 'one load of colors and one of whites',
      todoTags: ['cleaning'],
    },
    {
      todoId: 3,
      todoTitle: 'easter stuff',
      todoDueDate: 'April 17, 2022',
      todoDescription: 'dye eggs, hide eggs in the yard, get ci more candy',
      todoTags: ['family'],
    },
  ];

  sortTitle(): void {
    this.sortByTitle = !this.sortByTitle;
  }

  ngOnInit(): void {}
}
