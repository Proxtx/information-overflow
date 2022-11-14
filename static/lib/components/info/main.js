export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.options = options;
    setTimeout(() => this.autoScroll(), 2000);
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    switch (attribute) {
      case "name":
        this.document.getElementById("title").innerText = newValue;
        break;
    }
  }

  autoScroll() {
    this.document.getElementById("mainContent").scrollBy(5, 5);
    setTimeout(() => this.autoScroll(), 5);
  }
}
