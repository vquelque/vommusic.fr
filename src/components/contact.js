import React, { useState } from "react"

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        name: name,
        email: email,
        message: message,
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
      id="contact-form"
      className="contact-form"
      method="POST"
      onSubmit={handleOnSubmit}
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
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
