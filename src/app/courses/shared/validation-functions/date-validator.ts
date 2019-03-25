import { AbstractControl } from "@angular/forms";

export default (control: AbstractControl): {[key: string]: any} | null => {
      const validDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(control.value);
      return !validDate ? {'notAValidDate': {value: control.value}} : null;
}