import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  /*  @HostBinding('class') className = 'control'; */
  /*   @HostListener('click') onClick() {
    console.log('Clicked');
  } */

  private el = inject(ElementRef);

  onclick() {
    console.log('Clicked');
    console.log(this.el);
  }

  @Input({ required: true }) label!: string;
}
