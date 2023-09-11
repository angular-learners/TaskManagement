import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';
import { EmailPrefixPipe } from './pipes/email-prefix.pipe';
import { CustomDirective } from './directives/custom.directive';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, LoginComponent, CreateAccountComponent, UserHomeComponent, CustomUppercasePipe, EmailPrefixPipe, CustomDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
