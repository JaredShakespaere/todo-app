import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDescriptionComponent } from './todo-description/todo-description.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoDescriptionComponent, TodoComponent],
  imports: [BrowserModule,
    AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
