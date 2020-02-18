import React, { Component } from "react"
import Recaptcha from "react-recaptcha"

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      captcha_checked: false,
    }
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this)
    this.verifyCallback = this.verifyCallback.bind(this)
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  recaptchaLoaded = () => console.log("recaptcha loaded")

  verifyCallback = token =>
    this.setState({ captcha_checked: true, "g-recaptcha-reponse": token })

  handleRecaptcha = value => {
    this.setState({ "g-recapatcha-response": value })
  }

  handleSubmit = e => {
    if (!this.state.captcha_checked) {
      e.preventDefault()
      alert(
        "Merci de valider le captcha avec de tenter d'envoyer le formulaire."
      )
      return
    }
  }

  render() {
    const { cf_surname, cf_name, cf_email, cf_message } = this.state
    return (
      <form
        id="contact-form"
        method="post"
        action="contact.php"
        className="contact-form"
        onSubmit={this.handleSubmit}
      >
        <div className="controls">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="cf_surname">Prénom *</label>
                <input
                  type="text"
                  name="cf_surname"
                  value={cf_surname}
                  placeholder="Entrez votre prénom"
                  required="required"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="cf_name">Nom de famille *</label>
                <input
                  type="text"
                  name="cf_name"
                  value={cf_name}
                  placeholder="Entrez votre nom de famille"
                  required="required"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cf_email">Email *</label>
            <input
              type="email"
              name="cf_email"
              value={cf_email}
              placeholder="Entrez votre email"
              required="required"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cf_message">Votre message *</label>
            <textarea
              rows="4"
              name="cf_message"
              value={cf_message}
              placeholder="Votre message !"
              required="required"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <Recaptcha
              sitekey="6LclF30UAAAAALzEKk3uNkGundeTpsRBxkgK7RF-"
              render="explicit"
              onloadCallback={this.recaptchaLoaded}
              verifyCallback={this.verifyCallback}
            />
          </div>
          <div className="text-center">
            <input
              type="submit"
              name="send"
              value="Envoyer"
              className="btn btn-primary btn-block"
            />
          </div>
        </div>
      </form>
    )
  }
}

export default Contact
