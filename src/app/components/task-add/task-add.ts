import { Component } from '@angular/core';
import { TaskService } from '../../services/task'; 
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-task-add',
  standalone: true,
    imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './task-add.html'
})
export class TaskAddComponent {

  task: any = {};

  constructor(private taskService: TaskService, private router: Router) {}

  addTask() {
    this.task.id = Date.now();
    this.taskService.addTask(this.task);
    alert('Task added successfully!');
    this.router.navigate(['/tasks']);
  }
}