import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

import dateValidator from '../validation-functions/date-validator';

@Directive({
  selector: '[dateValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateValidator, multi: true}]
})
export class DateValidator implements Validator {
  @Input() validateDate: string;

  validate = dateValidator;
}
