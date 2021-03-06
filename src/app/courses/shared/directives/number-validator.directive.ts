import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

import numberValidator from '../validation-functions/number-validator';

@Directive({
  selector: '[numberValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: NumberValidator, multi: true}]
})
export class NumberValidator implements Validator {
  @Input() validateNumber: string;

  validate = numberValidator;
}
