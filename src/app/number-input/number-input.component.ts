import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.5s ease-out', style({ height: 300, opacity: 1 })),
      ]),
    ]),
  ],
})
export class NumberInputComponent {
  @Input() title: string;
  @Output() valueChange = new EventEmitter<boolean>();
  @Input() value: boolean;

  componentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.componentForm = this.fb.group({
      control: ['', Validators.max(3)],
    });
  }

  onValueChange() {
    this.valueChange.emit(this.value);
  }
}
