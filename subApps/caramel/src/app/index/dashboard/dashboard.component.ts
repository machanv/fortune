import { Component, ComponentRef, OnInit, ViewContainerRef } from "@angular/core";
import { ComponentItem } from "src/api/model/sys-arg";
import { ArticleAnalysisComponent } from "../article-analysis/article-analysis.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  componentList: ComponentItem[] = [
    { id: 0, name: "", component: ArticleAnalysisComponent }
  ];

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
  }

  loadComponent() {
    for (let item of this.componentList) {
      const componentRef = this.viewContainerRef.createComponent(item.component);
    }

  }

}
