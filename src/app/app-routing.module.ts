import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticationComponent } from './features/account/authentication/authentication.component';
import { CreateAccountComponent } from './features/account/create-account/create-account.component';
import { LoginComponent } from './features/account/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shell',
    pathMatch: 'full',
  },
  {
    path: 'shell',
    loadChildren: () => import('./shell/shell/shell.module').then(m => m.ShellModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
