import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YesNoQuestionComponent } from './yes-no-question/yes-no-question.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    YesNoQuestionComponent,
    DropdownListComponent,
    NumberInputComponent,
    SubmitButtonComponent,
    RadioGroupComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
