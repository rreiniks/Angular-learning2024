import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
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
  enteredTitle = "";
  enteredText = "";
  /* @Output() add = new EventEmitter(); */
  add = output<{title: string, text: string}>();
  
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

  onSubmit() {
    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    /* this.form().nativeElement.reset(); */
    this.enteredText = '';
    this.enteredTitle = '';
  }
}
