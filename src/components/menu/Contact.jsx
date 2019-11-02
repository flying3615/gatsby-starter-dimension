import React, {Component} from 'react'


const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {name: "", email: "", message: ""}
  }

  handleSubmit = e => {

    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({"form-name": "contact", ...this.state})
    }).then(() => alert("Thank you for the feedback!"))
      .catch(error => alert(error));

  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  handleReset = () => this.setState({name: "", email: "", message: ""})


  render() {

    const {name, email, message} = this.state;
    return (
      <article
        id="contact"
        className={`${this.props.article === 'contact' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
          }`}
        style={{display: 'none'}}
      >
        <h2 className="major">Contact</h2>
        <form onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact"/>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={this.handleChange}/>
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={this.handleChange}/>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" value={message} onChange={this.handleChange}/>
          </div>

          {/*<div data-netlify-recaptcha="true"/>*/}

          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special"/>
            </li>
            <li>
              <input type="reset" value="Reset" onClick={this.handleReset}/>
            </li>
          </ul>

          <div className="field" style={{overflow: 'hidden', borderRadius: '5px'}}>
            <iframe width='100%' height='50%'
                    src='https://maps.google.com/maps?q=China%20beach%20restaurant&t=&z=11&ie=UTF8&iwloc=&output=embed'
                    frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0'/>
          </div>

        </form>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/HuntaroSan"
              className="icon fa-tripadvisor"
            >
              <span className="label">TripAdvisor</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
        </ul>
      </article>
    )
  }

}