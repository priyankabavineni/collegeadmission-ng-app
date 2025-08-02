import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nospacevalidator(control:AbstractControl):ValidationErrors|null{
   if(control.value!=null&&control.value.includes(' ')){
      return {'nospace':true}
   }
   else{
    return null;
   }
}
