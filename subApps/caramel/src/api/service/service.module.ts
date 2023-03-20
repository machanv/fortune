import { NgModule } from "@angular/core";
import { UserService } from "./user.service";
import { ArticleService } from "./article.service";
import { HttpService } from "./http.service";


const serviceList = [
  ArticleService,
  HttpService,
  UserService
];

@NgModule(
  {
    imports: [],
    providers: [
      ...serviceList
    ]
  }
)
export class ServiceModule {
}
