import { Injectable } from "@angular/core";
import { ITodo } from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getTodos(): ITodo[] {
     return [
      {
        todoId: 1,
        todoTitle: 'interview prep',
        todoDueDate: new Date(2022, 3, 19),
        todoDescription: 'Hampr. Compile necessary documents. Go over the job description.',
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
  }
}
