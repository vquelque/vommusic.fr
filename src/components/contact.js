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
      url: "https://getform.io/f/8e9a00ca-bcff-41d7-9599-c6861ccff761",
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
    <form id="contact-form" className="contact-form" onSubmit={handleOnSubmit}>
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
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : ""}>
          {serverState.status.msg}
        </p>
      )}
    </form>
  )
}

export default Contact
