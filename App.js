import App from "./src/Loading.js"
import React from 'react';
import { registerRootComponent } from 'expo';

export default class Main extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

registerRootComponent(App);