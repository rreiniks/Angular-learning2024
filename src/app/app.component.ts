import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @Output() select = new EventEmitter<string>();
  users = DUMMY_USERS;
  selectedName = '';

  onSelectUser(id: string) {
    const user = DUMMY_USERS.find(user => user.id === id);
    this.selectedName = user!.name;
  }
}
