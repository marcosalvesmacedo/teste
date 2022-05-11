import { FormControl, FormGroup, Validators } from "@angular/forms";

export class CreateAccountFormModel {
    private createAccountForm: FormGroup;
    
    constructor() {
        this.createAccountForm = new FormGroup({
            name: new FormControl('',[
                Validators.required,
            ]),
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
        return this.createAccountForm;
    }
}