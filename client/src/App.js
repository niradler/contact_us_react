import React, {Component} from 'react';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-info is-large">
          <div className="hero-head has-text-centered">
            <h1 className="title">Jones Form</h1>
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">
                Contact US
              </p>
              <Form />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
