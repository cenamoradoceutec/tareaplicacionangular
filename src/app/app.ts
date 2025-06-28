import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTask } from './add-task/add-task';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddTask, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-todo-app';
  tasks: string[] = ['Aprender Angular', 'Crear ToDo App'];

  onTaskAdded(newTask: string) {
    this.tasks.push(newTask);
  }
}
