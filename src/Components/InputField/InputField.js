import React, {Component} from 'react';
import './InputField.css';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.disableValidationNotification = this.disableValidationNotification.bind(this);
    this.validateInputField = this.validateInputField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputValue: '',
      valid: 'init',
      displayMessage: ''
    }
  }
  
  disableValidationNotification() {
    this.setState({
      valid: 'init'
    })
  }
  
  handleChange(event) {
    //save data into local state
    this.setState({
      inputValue: event.target.value
    });
  }
  
  validateInputField() {
    let {emptyMessage, errorMessage, pattern} = this.props; //destruct props data
    let enteredData = this.state.inputValue; //take field value
    let regex = new RegExp(pattern); //create regex from the string
    if (enteredData === '') {
      this.setState({
        valid: 'invalid',
        displayMessage: emptyMessage
      });
    } else if (regex.test(enteredData)) {
      this.setState({
        valid: 'valid'
      });
      console.log('Field is valid');
    } else {
      this.setState({
        valid: 'invalid',
        displayMessage: errorMessage
      });
    }
  }
  
  render() {
    let {type, className, id, placeholder, pattern, required} = this.props;
    return (
      <label className="InputField__label">
        <input type={type} className={(this.state.valid !== 'init') ? className + ' ' + this.state.valid : className} id={id} placeholder={placeholder} pattern={pattern} required={required}
               onFocus={this.disableValidationNotification} onChange={this.handleChange} onBlur={this.validateInputField}/>
          {this.state.valid === 'invalid' && <p className="Form__error-message">{this.state.displayMessage}</p>}
      </label>
    )
  }
}

export default InputField;
