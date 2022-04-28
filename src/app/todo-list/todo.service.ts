import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ITodo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl: string = 'http://localhost:3000';
  private deleteUrl: string = 'http://localhost:3000/todos:id';


  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.baseUrl + '/todos').pipe(
      tap((data) => {
        console.log('All data', JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  postTodoForm(ITodo: ITodo) : Observable<ITodo> {
    return of(ITodo);
  }

  // deleteTodo(): Observable<ITodo[]>{
  //   return this.http.delete<ITodo[]>(this.baseUrl + '/todos/:id')
  //   .map((res: Response) => res.json().status).catch(this.handleError);
  // }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error: ${err.error.message}`;
    } else {
      errorMessage = `error code: ${err.status}, error message: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
