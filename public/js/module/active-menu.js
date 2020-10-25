export default class ActiveMenu {
  constructor(menu, activeClass) {
    this.menu = document.querySelectorAll(menu);
    this.currentPage = window.location.pathname;
    this.activeClass = activeClass || "active";
  }

  activeMenu() {
    [...this.menu].forEach((item) => {
      const active = this.currentPage.includes(item.getAttribute("href"));
      if (active) item.classList.add(this.activeClass);
    });
  }

  init() {
    if (this.menu) {
      this.activeMenu();
    }

    return this;
  }
}
