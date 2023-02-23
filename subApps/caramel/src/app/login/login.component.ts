import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  /**
   * Creates an instance of LoginComponent.k
   * @memberof LoginComponent
   * use Reactive forms
   */
  loginFormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });
  warningInfo: string = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const loginInfo = this.loginFormGroup.value;
    if (loginInfo.username === null || loginInfo.username === "" || loginInfo.password === null || loginInfo.password === "") {
      this.warningInfo = "用户名或密码不能为空";
    } else if (loginInfo.username) {

    } else {
      this.warningInfo = "";
    }

  }

  onReset() {
    this.warningInfo = "";
    console.log(this.loginFormGroup.value);
  }

}
