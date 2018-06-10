import React from 'react';
import Fade from 'react-reveal';

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
    this.clearForm = this.clearForm.bind(this);
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
      .then(() => this.clearForm(), err => console.log(err))
  }

  clearForm() {
    this.setState(
      {
        first_name: '',
        last_name: '',
        email_address: '',
        phone_number: '',
        message: ''
      }
    );
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
        <h1 className="contact__form--h1">Get in Touch</h1>
        <h2 className="contact__form--h2">Let us know what you're working towards, and we'll be in touch!</h2>
        <form className="contact__form">
          <div className="contact__form--input-pair">
            <div className="contact__form--input-container">
              {this.showErrors("first", "session-error")}
              <input
                className="contact__form--input"
                type="text"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.handleInput('first_name')}
              />
            </div>

            <div className="contact__form--input-container">
              {this.showErrors("last", "session-error")}
              <input
                className="contact__form--input"
                type="text"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={this.handleInput('last_name')}
              />
            </div>
          </div>
          <div className="contact__form--input-pair">
            <div className="contact__form--input-container">
              {this.showErrors("email", "session-error")}
              <input
                className="contact__form--input"
                type="text"
                placeholder="Email Address"
                value={this.state.email_address}
                onChange={this.handleInput('email_address')}
              />
            </div>

            <div className="contact__form--input-container">
              {this.showErrors("phone", "session-error")}
              <input
                className="contact__form--input"
                type="text"
                placeholder="Phone Number"
                value={this.state.phone_number}
                onChange={this.handleInput('phone_number')}
              />
            </div>
          </div>
          <div className="contact__form--input-container">
            {this.showErrors("message", "session-error")}
            <textarea
              className="contact__form--input contact__form--text-input"
              type="textarea"
              placeholder="message"
              value={this.state.message}
              onChange={this.handleInput('message')}
            />
          </div>
          <Fade up>
            <button className="contact__form--submit-button"
              onClick={this.handleSubmit}>Submit</button>
          </Fade>
        </form>
      </section>
    )
  }
}

export default ContactForm;
