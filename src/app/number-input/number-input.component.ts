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
  @Input() params: any;

  componentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.componentForm = this.fb.group({
      control: new FormControl(this.value, [Validators.max(3)]),
    });
    if (
      this.params !== undefined &&
      this.params.validators !== null &&
      this.params.validators !== undefined
    ) {
      for (let i = 0; i < this.params.validators.length; i++) {
        switch (this.params.validators[i].type) {
          case 'max':
            this.componentForm.addControl(
              'new',
              new FormControl(
                'max',
                Validators.max(this.params.validators[i].validatorParams) //ajouter les validators au control
              )
            );
        }
      }
    }
  }

  onValueChange() {
    this.valueChange.emit(this.value);
  }
}
