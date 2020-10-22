import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menu, button) {
    this.menu = document.querySelector(menu);
    this.button = document.querySelector(button);
    this.events = ["touchstart", "click"];

    this.activeClass = "active";
    this.activeMenu = this.activeMenu.bind(this);
  }

  activeMenu(event) {
    if (event.cancelable) {
      event.preventDefault();
      this.menu.classList.add(this.activeClass);
      this.button.classList.add(this.activeClass);
      this.menu.parentElement.classList.add(this.activeClass);

      document.body.style.overflow = "hidden";
    }

    outsideClick(this.menu, this.events, () => {
      this.menu.classList.remove(this.activeClass);
      this.button.classList.remove(this.activeClass);
      this.menu.parentElement.classList.remove(this.activeClass);

      document.body.style.overflow = "auto";
    });
  }

  addMenuEvent() {
    this.events.forEach((useEvent) => {
      this.button.addEventListener(useEvent, this.activeMenu);
    });
  }

  init() {
    if (this.button) this.addMenuEvent();

    return this;
  }
}
