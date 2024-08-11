import { Injectable } from "@angular/core";
import { LoginState } from "../states/login.state";
import { LoginRequest } from "../models/login.model";

@Injectable({
    providedIn: 'root'
})
export class LoginFactory {

    constructor(
        private loginState: LoginState
    ) {}

    public getLoginPayload(): LoginRequest {

        const loginInfo = this.loginState.getLoginForm();

        return <LoginRequest> {
            email: loginInfo.controls.email.value, 
            password: loginInfo.controls.password.value
        };

    }
}