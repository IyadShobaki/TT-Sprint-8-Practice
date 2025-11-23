class SubmitForm {
  constructor({ formSelector, handleFormSubmit }) {
    this._formSelector = formSelector;
    this._handleFormSubmit = handleFormSubmit;
  }

  _getTemplate() {
    const formElement = document
      .querySelector(this._formSelector)
      .content.querySelector(".form")
      .cloneNode(true);

    this._element = formElement;
  }

  generateForm() {
    this._getTemplate();
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();

      // Add a _handleFormSubmit() function call
      // Pass an object which is the result of the _getInputValues work to it
      this._handleFormSubmit(this._getInputValues());

      this._element.reset();
    });
  }

  _getInputValues() {
    // Get all field elements
    this._inputList = this._element.querySelectorAll(".form__input");

    // Create an empty object
    this._formValues = {};

    //Add the values of the fields to this object
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    // Return the values object
    return this._formValues;
  }
}

export default SubmitForm;
