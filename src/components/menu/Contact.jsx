import React, {Component} from 'react'

export default class Menu extends Component {

  render() {
    return (
      <article
        id="contact"
        className={`${this.props.article === 'contact' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
          }`}
        style={{display: 'none'}}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#" data-netlify="true">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"/>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"/>
          </div>

          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special"/>
            </li>
            <li>
              <input type="reset" value="Reset"/>
            </li>
          </ul>

          <div className="field" style={{overflow:'hidden', borderRadius:'5px'}}>
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