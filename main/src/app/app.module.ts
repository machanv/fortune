import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MainAppComponent } from './main-app.component';
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [MainAppComponent, EmptyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [MainAppComponent],
})
export class AppModule {}
