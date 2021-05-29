import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  lenTodo: number = 0;
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos")|| '[]');
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    if (this.todos.length === 1) {
      this.lenTodo = 0;
    }
    console.log("received");
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.lenTodo = this.lenTodo + 1;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
