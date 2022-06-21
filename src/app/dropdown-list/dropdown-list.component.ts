import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.5s ease-out', style({ height: 300, opacity: 1 })),
      ]),
    ]),
  ],
})
export class DropdownListComponent {
  @Output() valueChange = new EventEmitter<string>();
  @Output() change = new EventEmitter<number>();
  @Input() value: string;
  @Input() title: string;
  @Input() data: string[];
  @Input() id: number;

  onValueChange() {
    this.valueChange.emit(this.value);
    this.change.emit(this.id);
  }
}
