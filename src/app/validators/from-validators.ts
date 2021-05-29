import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";
import pL from 'js-regex-pl';

export class FormValidators {

    static notOnlyWhitespace(control: FormControl): ValidationErrors {
        if ((control.value !== null) && (control.value.trim().length === 0)) {
            return { 'notOnlyWhitespace' : true }
        }

        return null;
    }

    static confirmedValidator(group: FormGroup): FormGroup {
        const password = group.controls['password'].value;
        const passwordConfirm = group.controls['passwordConfirm'];

        if (passwordConfirm.errors && !passwordConfirm.errors?.mustMatch) {
            return group;
        }

        if (password !== passwordConfirm.value) {
            passwordConfirm.setErrors({ mustMatch: true });
        }
        else {
            passwordConfirm.setErrors(null);
        }

        return group;
    }

    static onlyLetters(control: FormControl): ValidationErrors {
        let regexp = new RegExp(`^[${pL}]{2,}$`);

        if (control.value !== null && !regexp.test(control.value)) {
            return { 'notOnlyLetters' : true }
        }

        return null;
    }
}