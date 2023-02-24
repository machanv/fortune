import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index.component";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserComponent } from "./user/user.component";
import { CommonComponentModule } from "../common/common-component.module";
import { ArticleAnalysisComponent } from "./article-analysis/article-analysis.component";

const routes: Routes = [
  {
    path: "", component: IndexComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "user", component: UserComponent }
    ]
  }
];

const components = [
  IndexComponent,
  DashboardComponent,
  UserComponent,
  ArticleAnalysisComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonComponentModule
  ]
})
export class IndexModule {
}

