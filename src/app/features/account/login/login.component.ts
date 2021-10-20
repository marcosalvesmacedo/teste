import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login = {
    email: '', 
    password: ''
  };

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);
      console.log(`login efetuado ${result}`);
      this.router.navigate(['']);
    } catch(e) {
      console.error(e);
    }
  }

}
