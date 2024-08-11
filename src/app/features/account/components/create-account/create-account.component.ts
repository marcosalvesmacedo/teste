import { Component } from '@angular/core';
import { AccountFacade } from '../../facades/account.facade';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  
  constructor(
    public accountFacade: AccountFacade
  ) { }

    public onSubmit(): void {
      this.accountFacade.onSubmitCreateAccount();
    }

}
