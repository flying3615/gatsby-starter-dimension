import PropTypes from 'prop-types'
import React from 'react'
import GalleryShow from './menu/GalleryShow'
import Intro from './menu/Intro'
import Menu from './menu/Menu'
import Contact from './menu/Contact'

class Main extends React.Component {

  render() {
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}
      >
        <Intro {...this.props} />

        <Menu {...this.props} />

        <GalleryShow {...this.props} />

        <Contact {...this.props} />

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
