import { Component } from '@angular/core';
import { TaskService } from '../../services/task'; 
import { Task } from '../../Model/task.model';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-task-list',
  standalone: true,
   imports: [CommonModule, RouterModule],
  templateUrl: './task-list.html'
})
export class TaskList {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

deleteTask(id: number) {
  const confirmDelete = confirm('Are you sure you want to delete this task?');

  if (confirmDelete) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}}