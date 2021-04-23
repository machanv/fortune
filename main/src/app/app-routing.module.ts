import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyComponent} from './components/empty/empty.component';
import {LoginGuard} from '../../../subApps/sub-angular/src/app/modules/backend/login/login.guard';
import {LoginComponent} from '../../../subApps/sub-angular/src/app/modules/backend/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/index/index.module').then((m) => m.IndexModule),
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
