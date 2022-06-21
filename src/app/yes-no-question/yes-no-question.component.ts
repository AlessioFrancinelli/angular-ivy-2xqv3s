import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'yes-no-question',
  templateUrl: './yes-no-question.component.html',
  styleUrls: ['./yes-no-question.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.5s ease-out', style({ height: 300, opacity: 1 })),
      ]),
    ]),
  ],
})
export class YesNoQuestionComponent {
  @Input() title: string;
  @Output() valueChange = new EventEmitter<boolean>();
  @Output() change = new EventEmitter<number>();
  @Input() value: boolean;
  @Input() id: number;

  constructor() {}

  clickYes() {
    if (this.value !== true) {
      this.value = true;
      this.valueChange.emit(this.value);
      this.change.emit(this.id);
    }
  }

  clickNo() {
    if (this.value !== false) {
      this.value = false;
      this.valueChange.emit(this.value);
      this.change.emit(this.id);
    }
  }
}
