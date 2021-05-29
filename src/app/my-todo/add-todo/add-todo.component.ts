import { EventEmitter, Component, OnInit, Output, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  description!: string;

  @Input() length!: number ;
  @Output() myEvent: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newIndex = this.length + 1
    const newTodo = {
      sno: newIndex,
      title: this.title,
      description: this.description,
      active: true
    }
    console.log(newTodo);
    this.myEvent.emit(newTodo);
  }

}
