import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EnterGuard } from "./login/entry-guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule)
  },
  {
    path: "index",
    canActivate: [EnterGuard],
    loadChildren: () =>
      import("./index/index.module").then((m) => m.IndexModule)
  },
  {
    path: "**",
    loadChildren: () =>
      import("./not-found/not-found.module").then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
