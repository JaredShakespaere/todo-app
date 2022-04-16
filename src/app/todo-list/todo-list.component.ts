import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ITodo } from '../todo/todo';

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

  filteredTodos: ITodo[] = [];

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    console.log('In setter:', value)
    this.filteredTodos = this.searchFilter(value);
  }

  private _addTitle: string = 'Get gas';
  get addTitle(): string {
    return this._addTitle;
  }
  set addTitle(value: string){
    this._addTitle = value;
    console.log('In setter:', value)
    
  }

  todos: ITodo[] = [
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
      this.filteredTodos.sort((a, b) => a.todoTitle.localeCompare(b.todoTitle));
      return this.todos;
    } else if(!this.sortByTitle){
      this.filteredTodos.sort((a,b) => b.todoTitle.localeCompare(a.todoTitle));
      return this.originalArr.todoTitle;
    }
  }

  sortDate(): any {
    this.sortByDate = !this.sortByDate;
      if(this.sortByDate) {
        this.filteredTodos.sort((a: any, b: any) => a.todoDueDate - b.todoDueDate)
        return this.todos;
      } else {
        this.filteredTodos.sort((a: any, b: any) => b.todoDueDate - a.todoDueDate);
        return this.originalArr.todoDueDate;
      }
  }

  searchFilter(filterBy: string): ITodo[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.todos.filter((todo: ITodo) => todo.todoTitle.toLocaleLowerCase().includes(filterBy));
  }


  ngOnInit(): void {
    this.listFilter = ''
  }

}
