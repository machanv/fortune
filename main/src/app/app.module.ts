import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {MainAppComponent} from './main-app.component';
import {CookieModule} from 'ngx-cookie';
import {ApiModule} from './api/api.module';
import {EmptyComponent} from './components/empty/empty.component';

@NgModule({
  declarations: [MainAppComponent, EmptyComponent],
  imports: [BrowserModule, AppRoutingModule, CookieModule.forRoot(), ApiModule],
  providers: [],
  bootstrap: [MainAppComponent],
})
export class AppModule {
}
