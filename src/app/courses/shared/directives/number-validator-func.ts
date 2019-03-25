import { AbstractControl } from "@angular/forms";

export default (control: AbstractControl): {[key: string]: any} | null => {
      const notANumber = !/^\d+$/.test(control.value);
      return notANumber ? {'notANumber': {value: control.value}} : null;
}