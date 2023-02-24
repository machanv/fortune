export interface NavItem {
  id: number;
  name: string;  // 菜单名称
  route: string;
  icon: string
}

export interface ComponentItem {
  id: number;
  name: string;  // 组件名称
  component: any;  // 组件名 userDataComponent
}
