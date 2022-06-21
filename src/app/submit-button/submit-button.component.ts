import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.5s ease-out', style({ height: 300, opacity: 1 })),
      ]),
    ]),
  ],
})
export class SubmitButtonComponent {
  @Output() buttonPressed = new EventEmitter<boolean>();

  click() {
    this.buttonPressed.emit();
  }
}
