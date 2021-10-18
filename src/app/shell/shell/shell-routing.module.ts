import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        path: 'passo-1',
        component: Componente1Component
      },
      {
        path: 'passo-2',
        component: Componente2Component
      },
      {
        path: 'passo-3',
        component: Componente3Component
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
