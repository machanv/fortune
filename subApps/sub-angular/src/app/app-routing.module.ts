import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {EmptyComponent} from './components/empty/empty.component';

const routes: Routes = [
  {
    path: 'user-center',
    loadChildren: () => import('./modules/forms/user-center/user-center.module').then((m) => m.UserCenterModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./modules/games/games.module').then((m) => m.GamesModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./modules/media/media.module').then((m) => m.MediaModule)
  }, {
    path: 'slider',
    loadChildren: () => import('./modules/slider/slider.module').then((m) => m.SliderModule)
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
