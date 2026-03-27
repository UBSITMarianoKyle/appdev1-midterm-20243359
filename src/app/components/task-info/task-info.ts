import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task';
import { Task } from '../../Model/task.model';

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-info.html'
})
export class TaskInfoComponent {

  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }
}