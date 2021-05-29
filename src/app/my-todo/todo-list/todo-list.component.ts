import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log("emitted");
    this.todoDelete.emit(todo);
  }

  statToggle(todo: Todo) {
    this.todoToggle.emit(todo);
  }
}
