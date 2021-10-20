import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Componente1Component } from '../../features/componente1/componente1.component';
import { Componente2Component } from '../../features/componente2/componente2.component';
import { Componente3Component } from '../../features/componente3/componente3.component';
import { ShellComponent } from '../../shell/shell/shell.component';
import { ShellRoutingModule } from './shell-routing.module';


@NgModule({
  declarations: [
    ShellComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component
  ],
  imports: [
    ShellRoutingModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellModule { }
