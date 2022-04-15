import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input()
  todoDescription!: string;
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
  constructor() {}

  ngOnInit(): void {}
}
