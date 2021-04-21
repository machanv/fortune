import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyComponent} from './components/empty/empty.component';
import {LoginGuard} from './components/login/login.guard';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  // { path: '/react'},
  {
    path: 'backend',
    loadChildren: () =>
      import('./modules/backend/backend.module').then((m) => m.BackendModule),
  }, {
    path: 'login',
    component: LoginComponent,
    // canActivate: [LoginGuard]
  },
  {path: '**', component: EmptyComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
];

// routes.forEach(route => {
//   route.canActivate = [LoginGuard];
// });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
