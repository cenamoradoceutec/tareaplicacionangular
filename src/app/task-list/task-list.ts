import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {
  @Input() tasks: string[] = [];
}
