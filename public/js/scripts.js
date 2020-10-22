import MenuMobile from './module/menu-mobile.js';
import ActiveMenu from './module/active-menu.js';

const menu = new MenuMobile('[data-menu="list"]', '[data-menu="button"]');
menu.init();

const activeMenu = new ActiveMenu('.side-nav__list a');
activeMenu.init();