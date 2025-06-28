import { Component } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddTaskComponent, TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  tasks: string[] = [];

  handleAddTask(task: string) {
    if (task.trim()) {
      this.tasks.push(task.trim());
    }
  }
}
