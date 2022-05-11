import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CreateAccountFormModel } from "../models/create-account-form.model";

@Injectable({
    providedIn: 'root'
})
export class CreateAccountState {
    private createAccountForm = new CreateAccountFormModel();

    public getCreateAccountForm(): FormGroup {
        return this.createAccountForm.builder();
    }

}