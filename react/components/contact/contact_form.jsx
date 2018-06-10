import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email_address: '',
      phone_number: '',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWilLMount() {
    this.props.clearVisitorErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestToCreateVisitor(this.state)
  }

  filteredErrors(labelName) {
    return this.props.errors.filter((error) => (
      error.toLowerCase().includes(labelName)
    ));
  }

  showErrors(labelName, displayClass) {
    if (this.props.errors.length > 0) {
      return (
        this.filteredErrors(labelName).map((error, i) => (
          <span key={i} className={displayClass}>{error}</span>
        ))
      );
    }
  }

  render() {
    return (
      <section className="contact__form--container">
        <form className="contact__form">
          <label>First Name</label>
          {this.showErrors("first", "session-error")}

          <input
            type="text"
            value={this.state.first_name}
            onChange={this.handleInput('first_name')}
          />

          <label>Last Name</label>
          {this.showErrors("last", "session-error")}

          <input
            type="text"
            value={this.state.last_name}
            onChange={this.handleInput('last_name')}
          />

          <label>Email Address</label>
          {this.showErrors("email", "session-error")}

          <input
            type="text"
            value={this.state.email_address}
            onChange={this.handleInput('email_address')}
          />
          <br></br>

          <label>Phone Number</label>
          {this.showErrors("phone", "session-error")}

          <input
            type="text"
            value={this.state.phone_number}
            onChange={this.handleInput('phone_number')}
          />

          <label>Message</label>
          {this.showErrors("message", "session-error")}
          <textarea
            type="textarea"
            value={this.state.message}
            onChange={this.handleInput('message')}
          />

          <div className="contact__form--submit-container">
            <button className="contact__form--submit-button"
              onClick={this.handleSubmit}>Send</button>
          </div>
        </form>
      </section>
    )
  }
}

export default ContactForm;
