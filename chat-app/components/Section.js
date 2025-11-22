class Section {
  constructor({ data, renderer }, containerSelector) {
    // data - an array of elements to be rendered
    this._renderedItems = data;
    // renderer - to be called on elements of data
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    // Iterate over the _renderedItems array of messages
    this._renderedItems.forEach((item) => this._renderer(item));
  }
  setItem(element) {
    // append single element to DOM
    this._container.append(element);
  }
}

export default Section;
