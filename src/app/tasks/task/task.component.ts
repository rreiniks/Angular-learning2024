import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  constructor(private tasksService: TasksService){}

  onCompleteTask(){
    return this.tasksService.removeTask(this.task.id);
  };
}
