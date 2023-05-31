import React, { Component } from "react";
import "../styles/style.css";

class ContactInfo extends Component {
  render() {
    const { nameVal, addrVal, cityVal, countryVal, phoneVal, emailVal } =
      this.props;

    return (
      <div>
        <h2>Contact</h2>
        <fieldset>
          <form>
            <div className="inputGroup">
              <label htmlFor="nameField">Name: </label>
              <input id="nameField" value={nameVal} type="text" />
            </div>
            <div className="inputGroup">
              <label htmlFor="addrField">Address: </label>
              <input id="addrField" value={addrVal} type="text" />
              <label htmlFor="cityField">City: </label>
              <input id="cityField" value={cityVal} type="text" />
              <label htmlFor="countryField">Country: </label>
              <input id="countryField" value={countryVal} type="text" />
            </div>
            <div className="inputGroup">
              <label htmlFor="phoneField">Phone: </label>
              <input id="phoneField" value={phoneVal} type="text" />
              <label htmlFor="emailField">Email: </label>
              <input id="emailField" value={emailVal} type="text" />
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default ContactInfo;
