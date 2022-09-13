export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.options = options;
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    switch (attribute) {
      case "src":
        this.document.getElementById("img").src = newValue;
        break;
    }
  }
}
