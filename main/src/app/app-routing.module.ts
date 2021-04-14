import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';

const routes: Routes = [
  // { path: '/react'},
  {
    path: 'backend',
    loadChildren: () =>
      import('./modules/backend/backend.module').then((m) => m.BackendModule),
  },
  { path: '**', component: EmptyComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
