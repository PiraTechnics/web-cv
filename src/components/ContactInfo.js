import React, { Component } from "react";

class ContactInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailText: "",
    };
  }

  handleChange = (e) => {};

  render() {
    const { emailVal } = this.props;

    return (
      <div>
        <h2>Contact</h2>
        <form>
          <label htmlFor="emailField"></label>
          <input
            id="emailField"
            value={emailVal}
            onChange={this.handleChange}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default ContactInfo;
