import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "../model";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   * 登录
   * @param email
   * @param password
   * **/
  login(email: string, password: string): Observable<User> {
    const user: User = { username: "", email: "", avatar: "", isAdmin: false };
    return of(user);
  }

  /**
   * 查询用户列表
   * **/
  getUserList() {

  }

  /**
   * 更新用户信息
   * **/
  updateUserInfo() {
  }

  /**
   * 删除用户
   * **/
  deleteUser() {
  }
}
