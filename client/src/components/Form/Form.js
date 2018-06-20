import React, {Component} from 'react';
import Field from '../Field';
import helpers from '../../helpers';

class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      values: {},
      validations: {},
      rules: {
        firstName: 'alpha|required|min:2',
        lastName: 'alpha|required|min:2',
        email: 'email|required',
        phoneNumber: 'numeric|digits:10|required'
      },
      submitMsg: ""
    }
  }

  clear = () => {
    this.setState({
      values: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      validations: {},
      rules: {
        firstName: 'alpha|required|min:2',
        lastName: 'alpha|required|min:2',
        email: 'email|required',
        phoneNumber: 'numeric|digits:10|required'
      }
    })
  }

  updateValue = (e) => {
    const state = this.state;

    state.values[e.target.name] = e.target.value;
    this.setState(state);
  }

  validateForm = () => {
    const state = this.state;
    let isValid = true;

    state.validations = helpers.validator(state.values, state.rules);

    if(Object.keys(state.validations).length === 0) {
      isValid = true;
      state.submitMsg = 'success!'
    }
    else {
      isValid = false;
      state.submitMsg = 'failed, try again!'
    }
    
    this.setState(state);
    return isValid;
  }

  submit = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      helpers.sendEmail(this.state.values);
      this.clear();
    }
  }

  render() {
    const validations = this.state.validations;

    return (
      <div className="form">
        <form onSubmit={this.submit}>
          <Field
            name="firstName"
            type="text"
            value={this.state.values.firstName}
            placeholder="First Name"
            updateValue={this.updateValue}
            hasError={validations.firstName}/>
          <Field
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={this.state.values.lastName}
            updateValue={this.updateValue}
            hasError={validations.lastName}/>
          <Field
            name="email"
            type="email"
            placeholder="Mail Address"
            value={this.state.values.email}
            updateValue={this.updateValue}
            hasError={validations.email}/>
          <Field
            name="phoneNumber"
            type="number"
            placeholder="Phone Number"
            value={this.state.values.phoneNumber}
            updateValue={this.updateValue}
            hasError={validations.phoneNumber}/>
          <div className="field">
            <button type="submit" className="button is-primary is-medium">Submit</button>
            <p className="content">{this.state.submitMsg}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
