import React, { Component } from "react";
import { FaRegAddressCard, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
              <label htmlFor="nameField">Name </label>
              <input id="nameField" value={nameVal} type="text" />
            </div>
            <div className="inputGroup">
              <label htmlFor="addrField">
                <FaRegAddressCard className="react-icons" size={30} />
              </label>
              <input id="addrField" value={addrVal} type="text" />
              <label htmlFor="cityField">City: </label>
              <input id="cityField" value={cityVal} type="text" />
              <label htmlFor="countryField">Country: </label>
              <input id="countryField" value={countryVal} type="text" />
            </div>
            <div className="inputGroup">
              <label htmlFor="phoneField">
                <FaPhone className="react-icons" size={20} />
              </label>
              <input id="phoneField" value={phoneVal} type="text" />
              <label htmlFor="emailField">
                <MdEmail className="react-icons" size={25} />
              </label>
              <input id="emailField" value={emailVal} type="text" />
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default ContactInfo;
