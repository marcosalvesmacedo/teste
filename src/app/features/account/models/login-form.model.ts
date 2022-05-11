import { FormControl, FormGroup, Validators } from "@angular/forms";

export class LoginFormModel {
    
    private form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            email: new FormControl('', [
                Validators.email,
                Validators.required
            ]),
            password: new FormControl('', [
                Validators.required
            ]),
        });
    }

    public builder(): FormGroup {
        return this.form;
    }
}