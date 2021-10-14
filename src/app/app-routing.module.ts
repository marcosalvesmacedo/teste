import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shell',
    pathMatch: 'full'
  },
  {
    path: 'shell',
    loadChildren: () => import('./shell/shell/shell.module').then(m => m.ShellModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
