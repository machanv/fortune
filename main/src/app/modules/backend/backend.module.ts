import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes = [{ path: '', component: LoginComponent }];
const declarations_exports = [LoginComponent];

@NgModule({
  declarations: [...declarations_exports],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BackendModule {}
