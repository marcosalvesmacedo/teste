import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateAccount, CreateAccountRequest, CreateAccountResponse } from 'src/app/features/account/models/create-account.model';
import { LoginRequest } from 'src/app/features/account/models/login.model';
import { AccountAdapter } from '../adapters/account.adapter';
import { PATH_URLS } from '../constants/commons.constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,
    private accountAdapter: AccountAdapter
  ) { }

  public async login(loginData: LoginRequest) {
    const result: any = await this.http.post(PATH_URLS.USER_LOGIN, loginData).toPromise();
    if (result && result.accessToken) {
      window.localStorage.setItem('token', result.accessToken);
      return true;
    }
    return false;
  }

  public createAccount(CreateAccountData: CreateAccountRequest): Observable<CreateAccount> {
    return this.http.post(PATH_URLS.USER_CREATE_ACCOUNT, CreateAccountData)
    .pipe(
      map((response: any) => {
        return this.accountAdapter.adaptCreateAccountResult(response);
      })
    );
  }

}
