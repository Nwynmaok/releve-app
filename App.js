import App from "./src/App.js"
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