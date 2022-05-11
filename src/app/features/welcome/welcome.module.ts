import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatButtonModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeModule { }
