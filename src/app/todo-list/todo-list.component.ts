import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ITodo } from './todo';
import { TodoService } from './todo.service';

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
  todos: ITodo[] = []
  originalArr: any = this.todos.map;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    console.log('In filter setter:', value)
    this.filteredTodos = this.searchFilter(value);
  }



  constructor(private todoService: TodoService) {}

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
    this.todos = this.todoService.getTodos();
    this.filteredTodos = this.todos;

  }

}
