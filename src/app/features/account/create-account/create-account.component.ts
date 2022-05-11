import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateAccountState } from '../states/create-account.state';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  public account = {
    name: '',
    email: '',
    password: ''
  }
  constructor(
    private createAccountState: CreateAccountState
  ) { }

    public get createAccountForm(): FormGroup {
      return this.createAccountState.getCreateAccountForm();
    }

    public onSubmit(): void {
      console.log('form create account', this.createAccountForm);
    }
}
