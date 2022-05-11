import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { LoginFormModel } from "../models/login-form.model";

@Injectable({
    providedIn: 'root'
})
export class LoginState {

    private loginForm = new LoginFormModel();

    public getLoginForm(): FormGroup {
        return this.loginForm.builder();
    }

}