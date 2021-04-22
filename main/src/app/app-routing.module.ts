import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyComponent} from './components/empty/empty.component';
import {LoginGuard} from './components/login/login.guard';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/index/index.module').then((m) => m.IndexModule),
  }, {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'backend',
    loadChildren: () =>
      import('./modules/backend/backend.module').then((m) => m.BackendModule),
    canActivate: [LoginGuard]
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: EmptyComponent},
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
