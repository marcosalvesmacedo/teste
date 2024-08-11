import { Injectable } from "@angular/core";
import { CreateAccountRequest } from "../models/create-account.model";
import { CreateAccountState } from "../states/create-account.state";

@Injectable({
    providedIn: 'root'
})
export class CreateAccountFactory {

    constructor(
        private createAccountState: CreateAccountState
    ) {}

    public getCreateAccountPayload(): CreateAccountRequest {

        const createAccountInfo = this.createAccountState.getCreateAccountForm();

        return <CreateAccountRequest> {
            name: createAccountInfo.controls.name.value,
            email: createAccountInfo.controls.email.value, 
            password: createAccountInfo.controls.password.value
        };
        
    }
}