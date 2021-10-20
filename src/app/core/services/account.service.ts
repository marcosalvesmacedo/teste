import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  public async login(user: any) {
    const result: any = await this.http.post(`api/v1/authentication/user/login`, user).toPromise();
    if (result && result.accessToken) {
      window.localStorage.setItem('token', result.accessToken);
      return true;
    }
    return false;
    // return new Promise((resolve) => {
    //   window.localStorage.setItem('token', 'meu-token');
    //   resolve(true);
    // });
  }

  public createAccount() {
    return new Promise((resolve) => {
      resolve(true)
    });
  }
}
