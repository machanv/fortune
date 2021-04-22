import {NavItem} from '../model';

/* 左侧navbar的数据 */
export const NavBar: NavItem[] = [
  {
    id: 0,
    name: '首页',
    link: '/',
    icon: 'iconindex',
    selected: true,
  },
  {id: 1, name: 'react', link: 'react', icon: '', selected: false},
  {id: 2, name: 'vue', link: 'vue', icon: '', selected: false},
  {id: 3, name: 'angular', link: 'angular', icon: '', selected: false},
];
