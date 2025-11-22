class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    // Iterate over the _renderedItems array of messages
    this._renderedItems.forEach((item) => this._renderer(item));
  }
  setItem(element) {
    this._container.append(element);
  }
}

export default Section;
