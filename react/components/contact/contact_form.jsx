import React from 'react';
import Fade from 'react-reveal';
import Popup from 'reactjs-popup';
import _ from 'lodash';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_name: '',
      first_name: '',
      last_name: '',
      email_address: '',
      phone_number: '',
      message: '',
      confirmationModalOpen: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.closeConfirmationModal = this.closeConfirmationModal.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentWillMount() {
    this.props.clearVisitorErrors();
    window.scroll(0, 0);
  }

  componentWillUnmount() {
    this.props.clearVisitorErrors();
  }

  closeConfirmationModal() {
    this.setState({ confirmationModalOpen: false })
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestToCreateVisitor(this.state)
      .then(() => setTimeout(this.clearForm, 2000)),
      err => (console.log("there was an error"));
    this.props.clearVisitorErrors();
  }

  clearForm() {
    if (this.props.visitors && this.props.visitors.length) {
      this.setState(
        {
          modal_name: this.state.first_name,
          first_name: '',
          last_name: '',
          email_address: '',
          phone_number: '',
          message: '',
          confirmationModalOpen: true
        }
      );
    }
  }

  filteredErrors(labelName) {
    const filteredByLabel = _.uniq(this.props.errors).filter((error) => (
      error.toLowerCase().includes(labelName)
    ));
    return filteredByLabel.length ? filteredByLabel.slice(0, 1) : []
  }

  buildErrorSpans(labelName, displayClass) {
    return (
      this.filteredErrors(labelName).map((error, i) => (
        <span key={i} className={displayClass}>{error}</span>
      ))
    );
  }

  showErrors(labelName, displayClass) {
    if (this.props.errors && this.props.errors.length > 0) {
      const errors = this.buildErrorSpans(labelName, displayClass)
      return errors.length ? errors : <span className={displayClass} />
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
              {this.showErrors("first", "visitor-error")}
              <input
                className="contact__form--input"
                type="text"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.handleInput('first_name')}
              />
            </div>

            <div className="contact__form--input-container">
              {this.showErrors("last", "visitor-error")}
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
              {this.showErrors("email", "visitor-error")}
              <input
                className="contact__form--input"
                type="text"
                placeholder="Email Address"
                value={this.state.email_address}
                onChange={this.handleInput('email_address')}
              />
            </div>

            <div className="contact__form--input-container">
              {this.showErrors("phone", "visitor-error")}
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
            {this.showErrors("message", "visitor-error")}
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
          <Popup
            modal
            open={this.state.confirmationModalOpen}
            contentStyle={
              {
                padding: '0',
                border: '0',
                backgroundColor: 'transparent',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
              }
            }
            closeOnDocumentClick
            onClose={this.closeConfirmationModal}
          >
            <Fade down>
              <div className="contact__form--modal-container">
                <h4 className="contact__form--modal-h4">{`Thanks, ${this.state.modal_name}!`}</h4>
                <p className="contact__form--modal-p">We'll reach out to you shortly.</p>
              </div>
            </Fade>
          </Popup>
        </form>
      </section>
    )
  }
}

export default ContactForm;
