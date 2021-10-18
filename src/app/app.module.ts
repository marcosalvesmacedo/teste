import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ShellModule } from './shell/shell/shell.module';
import { LoginComponent } from './features/account/login/login.component';
import { CreateAccountComponent } from './features/account/create-account/create-account.component';
import { AuthenticationComponent } from './features/account/authentication/authentication.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatStepperModule,
    MatIconModule,
    BrowserAnimationsModule,
    ShellModule
  ],
  providers: [{
    provide: LOCALE_ID, 
    useValue: "pt-BR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
