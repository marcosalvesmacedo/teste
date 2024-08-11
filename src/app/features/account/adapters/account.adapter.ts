import { Injectable } from "@angular/core";
import { CreateAccount, CreateAccountResponse } from "../models/create-account.model";

@Injectable({
    providedIn: 'root'
})
export class AccountAdapter {

    constructor() {}

    public adaptCreateAccountResult(createAccount: CreateAccountResponse): CreateAccount {
        return {
            code: createAccount.code,
            name: createAccount.name,
            email: createAccount.email
        } as CreateAccount;
    }

}
