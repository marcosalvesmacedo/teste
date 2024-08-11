import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";
import { CreateAccountFactory } from "../factories/create-account.factory";
import { CreateAccountState } from "../states/create-account.state";
import { FormGroup } from "@angular/forms";
import { LoginState } from "../states/login.state";
import { LoginFactory } from "../factories/login.factory";
import {MatSnackBar} from '@angular/material/snack-bar';
import { CreateAccount } from "../models/create-account.model";
import { SnakbarComponent } from "src/app/components/snakbar/snakbar.component";

@Injectable({
    providedIn: 'root'
})
export class AccountFacade {

    constructor(
        private router: Router,
        private loginState: LoginState,
        private accountService: AccountService,
        private loginFactory: LoginFactory,
        private createAccountFactory: CreateAccountFactory,
        private createAccountState: CreateAccountState,
        private matSnackBar: MatSnackBar
    ) {}

    public onSubmitCreateAccount(): void {
        const createAccountPayload = this.createAccountFactory.getCreateAccountPayload();
        this.accountService.createAccount(createAccountPayload)
            .subscribe((resp: CreateAccount) => {
                this.snakbarOpen(resp.name);
                this.router.navigate(['login']);
            });
    }

    public async onSubmitLogin() {
        try {
            const result = await this.accountService.login(this.loginFactory.getLoginPayload());
            if (result) {
                this.router.navigate(['welcome']);
            }
        } catch(e) {
            console.error(e);
        }
    }

    public get loginForm(): FormGroup {
    return this.loginState.getLoginForm();
    }

    public get createAccountForm(): FormGroup {
        return this.createAccountState.getCreateAccountForm();
    }

    private snakbarOpen(message: string): void {
        this.matSnackBar.openFromComponent(SnakbarComponent, {
            data: {
                message: `${message} foi criada com sucesso!`
            },
            duration: 5000,
        });
    }
}
