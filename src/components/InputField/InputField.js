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
      displayMessage: this.props.options.emptyMessage
    }
  }
  
  disableValidationNotification() {
    this.props.changeFieldStatus(this.props.options.id, 'init');
  }
  
  handleChange(event) {
    //save data into local state
    this.setState({
      inputValue: event.target.value
    });
  }
  
  changeFieldStatus(status) {
    this.props.changeFieldStatus(this.props.options.id, status);
  }
  
  validateInputField() {
    let {emptyMessage, errorMessage, pattern} = this.props.options; //destruct props data
    let enteredData = this.state.inputValue; //take field value
    let regex = new RegExp(pattern); //create regex from the string
    if (enteredData === '') {
      this.changeFieldStatus('invalid');
      this.setState({
        displayMessage: emptyMessage
      });
    } else if (regex.test(enteredData)) {
      this.changeFieldStatus('valid');
    } else {
      this.changeFieldStatus('invalid');
      this.setState({
        displayMessage: errorMessage
      });
    }
  }
  
  render() {
    let {type, className, id, placeholder, pattern} = this.props.options;
    return (
      <label className="InputField__label">
        <input type={type} className={(this.props.validationStatus !== 'init') ? className + ' ' + this.props.validationStatus : className} id={id} placeholder={placeholder} pattern={pattern}
               onFocus={this.disableValidationNotification} onChange={this.handleChange} onBlur={this.validateInputField}/>
          {this.props.validationStatus === 'invalid' && <p className="Form__error-message">{this.state.displayMessage}</p>}
      </label>
    )
  }
}

export default InputField;
