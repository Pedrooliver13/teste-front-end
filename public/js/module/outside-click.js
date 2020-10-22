export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((useEvent) => {
      setTimeout(() => html.addEventListener(useEvent, handleOutsideClick));
    });
    element.setAttribute(outside, ""); // adicione o outside click vazio;
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);

      events.forEach((useEvent) => {
        html.removeEventListener(useEvent, handleOutsideClick);
      });

      return callback();
    }
  }
}
