import React, {Component} from 'react';
import './InputField.css';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.disableValidationNotification = this.disableValidationNotification.bind(this);
    this.validateInputField = this.validateInputField.bind(this);
  }
  
  disableValidationNotification() {
    console.log(this.props.id + ' is focused');
  }
  
  validateInputField() {
    console.log(this.props.id + ' have lost focus');
  }
  
  render() {
    let {type, className, id, placeholder, pattern, required} = this.props;
    return (<input type={type} className={className} id={id} placeholder={placeholder} pattern={pattern} required={required} onFocus={this.disableValidationNotification} onBlur={this.validateInputField}/>)
  }
}

export default InputField;
