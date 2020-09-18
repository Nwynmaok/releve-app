import App from "./src/Navigator.js"
import React from 'react';
import { registerRootComponent } from 'expo';

export default class Main extends React.Component {
  render() {
    return (
      <App navigation={this.props.navigation}/>
    );
  }
}

registerRootComponent(App);