export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.options = options;
    this.text = this.document.getElementById("text");
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    switch (attribute) {
      case "text":
        this.text.innerText = newValue;
        break;
      case "size":
        this.text.style.fontSize = newValue;
        break;
      case "color":
        this.text.style.color = newValue;
        break;
    }
  }
}
