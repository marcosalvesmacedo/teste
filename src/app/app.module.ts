import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { CreateAccountComponent } from './features/account/components/create-account/create-account.component';
import { LoginComponent } from './features/account/components/login/login.component';
import { WelcomeModule } from './features/welcome/welcome.module';
import { ShellModule } from './shell/shell/shell.module';
import { SnakbarComponent } from './components/snakbar/snakbar.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    LoginComponent,
    CreateAccountComponent,
    SnakbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ShellModule,
    WelcomeModule,
    NgbModule
  ],
  providers: [{
    provide: LOCALE_ID, 
    useValue: "pt-BR"
  }],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
