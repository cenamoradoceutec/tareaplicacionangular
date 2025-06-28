import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTaskComponent {
  newTask: string = '';

  @Output() onAdd = new EventEmitter<string>();

  addTask() {
    this.onAdd.emit(this.newTask);
    this.newTask = '';
  }
}
