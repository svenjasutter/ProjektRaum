import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-feedback-projects',
  templateUrl: './feedback-projects.component.html',
  styleUrls: ['./feedback-projects.component.css'],
})
export class FeedbackProjectComponent {

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}

  private breakpointObserver = inject(BreakpointObserver);

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
