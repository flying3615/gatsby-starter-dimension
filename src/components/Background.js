import React, {Component} from 'react'

import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';

const fadeInLeftEffect = keyframes`${fadeIn}`;

const FadeInLeftDiv = styled.div`
  animation: 3s ${fadeInLeftEffect};
`;

class Background extends Component {

  render() {
    // TODO animation not working???
    // console.log('----render--'+this.props.background)
    return <FadeInLeftDiv id="bg" style={{
      backgroundImage: `url(${this.props.background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}/>

  }
}

export default Background