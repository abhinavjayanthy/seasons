import React from 'react';

const LoadingScreen = (props) => {
    return(
  <div class="ui active dimmer">
    <div class="ui text loader">{props.message}</div>
  </div>
    )
}

// Using default props 
LoadingScreen.defaultPorps = {
    message : 'Loading...'
}

export default LoadingScreen;