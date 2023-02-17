import { BasicObject } from './basic-object';

export interface User extends BasicObject {
  email: string; // 邮箱
  isAdmin: string; // 是否管理员
  createTime?: Date; // 创建时间
  lastTime?: Date; //  最后登录时间
}
