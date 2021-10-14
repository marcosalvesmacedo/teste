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

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
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
