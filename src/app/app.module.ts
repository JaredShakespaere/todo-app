import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDescriptionComponent } from './todo-description/todo-description.component';
import { TodoComponent } from './todo/todo.component';
import { SortComponent } from './sort/sort.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoDescriptionComponent, TodoComponent, SortComponent],
  imports: [BrowserModule,
    AppRoutingModule, FormsModule],


  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
