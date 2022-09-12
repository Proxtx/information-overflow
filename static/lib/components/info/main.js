export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.options = options;
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    switch (attribute) {
      case "name":
        this.document.getElementById("title").innerText = newValue;
        break;
    }
  }
}
