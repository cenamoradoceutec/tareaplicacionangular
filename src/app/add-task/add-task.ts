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
export class AddTask {
  newTask = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    const task = this.newTask.trim();
    if (task) {
      this.taskAdded.emit(task);
      this.newTask = '';
    }
  }
}
