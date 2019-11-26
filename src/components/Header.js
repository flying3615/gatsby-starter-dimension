import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-envira"/>
        </div>
        <div className="content">
            <div className="inner">
              <h1>CHINA BEACH RESTAURANT</h1>
              <p style={{"margin":"0 0 0 0"}}>Looking for authentic Asian cuisine in Paraparaumu?</p>
              <p style={{"margin":"0 0 0 0"}}>Discover Cantonese and Si-Chuan Style cooking at China Beach Restaurant</p>
              <p>with take away and dine in</p>
            </div>
        </div>
        <nav>
            <ul>
              <li><a href="javascript:" onClick={() => {props.onOpenArticle('intro')}}><strong>Intro</strong></a></li>
              <li><a href="javascript:" onClick={() => {props.onOpenArticle('menu')}}><strong>Menu</strong></a></li>
              <li><a href="javascript:" onClick={() => {props.onOpenArticle('gallery')}}><strong>Gallery</strong></a></li>
              <li><a href="javascript:" onClick={() => {props.onOpenArticle('contact')}}><strong>Contact</strong></a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
