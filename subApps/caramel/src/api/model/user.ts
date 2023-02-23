export interface User {
  id?: number; // 用户id
  username: string;  // 用户名
  password?: string;  // 密码

  email?: string; // 邮箱
  isAdmin?: boolean; // 是否管理员
  createTime?: Date; // 创建时间
  lastTime?: Date; //  最后登录时间

  avatar?: string;  // 头像
  area?: number; // 所在区域
  address?: string;  // 地址
  personalSignature?: string;  // 个性签名
}
