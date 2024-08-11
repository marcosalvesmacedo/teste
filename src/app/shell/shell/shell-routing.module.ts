import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CreateAccountComponent } from 'src/app/features/account/components/create-account/create-account.component';
import { LoginComponent } from 'src/app/features/account/components/login/login.component';
import { Componente1Component } from 'src/app/features/componente1/componente1.component';
import { Componente2Component } from 'src/app/features/componente2/componente2.component';
import { Componente3Component } from 'src/app/features/componente3/componente3.component';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('../../features/welcome/welcome.module').then(m => m.WelcomeModule),
        canActivate: [AuthGuard]
      },
      { 
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
