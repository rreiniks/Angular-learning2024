import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

let name = '';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ TaskComponent ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input() name?: string;
}
