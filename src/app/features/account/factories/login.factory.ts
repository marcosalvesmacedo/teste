import { Injectable } from "@angular/core";
import { LoginState } from "../states/login.state";

@Injectable({
    providedIn: 'root'
})
export class LoginFactory {

    constructor(
        private loginState: LoginState
    ) {}

    public getLoginPayload(): any {

        const loginInfo = this.loginState.getLoginForm();

        return <any> {
            email: loginInfo.controls.email.value, 
            password: loginInfo.get('password')
        };
        
    }
}