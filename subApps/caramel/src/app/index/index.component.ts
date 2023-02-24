import { Component, OnInit } from "@angular/core";
import { NavItem } from "src/api/model/sys-arg";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {

  navList: NavItem[] = [
    { id: 0, name: "看板", route: "dashboard", icon: "" },
    { id: 1, name: "用户", route: "user", icon: "" }
  ];
  selectedNav: NavItem = this.navList[0];

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleNav(item: NavItem) {
    this.selectedNav = item;
  }

}
