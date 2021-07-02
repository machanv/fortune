import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {LoginGuard} from './modules/backend/login/login.guard';
import {EmptyComponent} from './components/empty/empty.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./modules/backend/backend.module').then((m) => m.BackendModule),
  //   canActivate: [LoginGuard]
  // },
  {
    path: 'user-center',
    loadChildren: () => import('./modules/forms/user-center/user-center.module').then((m) => m.UserCenterModule)
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: EmptyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // @ts-ignore
  providers: [{provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/angular' : '/'}]
})
export class AppRoutingModule {
}
