import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { LoginFactory } from '../factories/login.factory';
import { LoginState } from '../states/login.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  constructor(
    private router: Router,
    private accountService: AccountService,
    private loginState: LoginState,
    private loginFactory: LoginFactory
  ) { }

  
  public get loginForm(): FormGroup {
    return this.loginState.getLoginForm();
  }

  async onSubmit() {
    console.log(this.loginForm);
    try {
      const result = await this.accountService.login(this.loginFactory.getLoginPayload());
      console.log(`login efetuado ${result}`);
      this.router.navigate(['welcome']);
    } catch(e) {
      console.error(e);
    }
  }

}
