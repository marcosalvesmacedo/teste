import { Component } from '@angular/core';
import { AccountFacade } from '../../facades/account.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  constructor(
    public accountFacade: AccountFacade
  ) { }

  async onSubmit() {
    this.accountFacade.onSubmitLogin();
  }

}
