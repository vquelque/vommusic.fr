import React, { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [botField, setBotField] = useState(false)

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      setName("")
      setEmail("")
      setMessage("")
    }
  }
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "/",
      data: encode({
        "form-name": form.getAttribute("name"),
        name: name,
        email: email,
        message: message,
        "bot-field": botField,
      }),
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
      name="contact"
      id="contact-form"
      className="contact-form"
      onSubmit={handleOnSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="controls">
        <div className="form-group">
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input
                name="bot-field"
                onChange={e => setBotField(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
          <label htmlFor="name">Nom *</label>
          <input
            type="text"
            name="name"
            placeholder="Entrez votre nom"
            required="required"
            className="form-control"
            aria-label="name placeholder"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Entrez votre email"
            required="required"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={message}
            onChange={e => setMessage(e.target.value)}
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
