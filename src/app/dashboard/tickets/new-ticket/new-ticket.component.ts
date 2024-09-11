import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit{
  ngOnInit(): void {
    console.log('ONINIT');
    console.log(this.form().nativeElement);
  }
  /* @ViewChild('form') form?: ElementRef<HTMLFormElement>; */
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title, ticketText);
    this.form().nativeElement.reset();
  }
}
