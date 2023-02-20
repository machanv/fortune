import { BasicObject } from './basic-object';

export interface User {
  id:number; // 用户id
  username:string;  // 用户名
  password:string;  // 密码
  email: string; // 邮箱
  isAdmin: string; // 是否管理员
  createTime?: Date; // 创建时间
  lastTime?: Date; //  最后登录时间
}
