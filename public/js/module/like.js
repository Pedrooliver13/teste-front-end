export default class Like {
  constructor(button) {
    this.buttons = document.querySelectorAll(button);
    this.activeClass = "active";
  }

  activeButton(event) {
    const target = event.target;
    const id = target.getAttribute("id");
    const targetClass = target.getAttribute("class");
    const likes = [];

    if (!targetClass.includes(this.activeClass)) {
      target.classList.add(this.activeClass);
      this.saveValues(id, likes);
    } else {
      target.classList.remove(this.activeClass);
      this.removeValues(id, target);
    }
  }

  saveValues(id, values) {
    if (localStorage.hasOwnProperty("likes"))
      values = JSON.parse(localStorage.getItem("likes"));

    values.push({ id });
    localStorage.likes = JSON.stringify(values);
  }

  removeValues(id, target) {
    let localObject = JSON.parse(localStorage.getItem("likes"));

    if (localObject && localObject.length === 1) {
      localStorage.removeItem("likes");
    } else {
      let currentTarget = localObject.filter(
        (item) => target.getAttribute("id") !== item.id,
      );
      localObject = currentTarget;

      localStorage.setItem("likes", JSON.stringify(currentTarget));
    }
  }

  setValues() {
    const stringLikes = localStorage.getItem("likes");

    [...this.buttons].map((item) => {
      const itemId = item.getAttribute("id");

      if (stringLikes.includes(itemId)) {
        item.classList.add(this.activeClass);
      }
    });
  }

  addButtonEvent() {
    this.buttons.forEach((item) => {
      item.addEventListener("click", this.activeButton);
    });
  }

  bindEvent() {
    this.activeButton = this.activeButton.bind(this);
  }

  init() {
    if (localStorage.likes) this.setValues();

    this.bindEvent();
    this.addButtonEvent();

    return this;
  }
}
