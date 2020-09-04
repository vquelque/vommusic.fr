import React, { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: this.props.location.pathname,
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Bien reçu, merci!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <form
      id="contact-form"
      className="contact-form"
      onSubmit={handleOnSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="controls">
        <div className="form-group">
          <label htmlFor="name">Nom *</label>
          <input
            type="text"
            name="name"
            placeholder="Entrez votre nom"
            required="required"
            className="form-control"
            aria-label="name placeholder"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Entrez votre email"
            required="required"
            className="form-control"
            aria-label="email placeholder"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Votre message *</label>
          <textarea
            rows="4"
            name="message"
            placeholder="Votre message !"
            required="required"
            className="form-control"
            aria-label="message placeholder"
          ></textarea>
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Envoyer"
            className="btn btn-primary btn-block"
            aria-label="send button"
            disabled={serverState.submitting}
          />
        </div>
      </div>
      <input type="hidden" name="form-name" value="contact" />
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : ""}>
          {serverState.status.msg}
        </p>
      )}
    </form>
  )
}

export default Contact
