import { AbstractControl, ValidationErrors } from '@angular/forms';

export function gmailValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;
  if (!value) return null;

  const isValidGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value);

  return isValidGmail ? null : { invalidGmail: true };
}
