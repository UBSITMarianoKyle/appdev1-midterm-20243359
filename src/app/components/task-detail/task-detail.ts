import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskService } from '../../services/task';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../Model/task.model';
@Component({
  selector: 'app-task-detail',
  imports: [RouterModule],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {  
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }
}