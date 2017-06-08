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
      valid: true,
      displayMessage: ''
    }
  }
  
  disableValidationNotification() {
    this.setState({
      valid: true
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
        valid: false,
        displayMessage: emptyMessage
      });
    } else if (regex.test(enteredData)) {
      console.log('Field is valid');
    } else {
      this.setState({
        valid: false,
        displayMessage: errorMessage
      });
    }
  }
  
  render() {
    let {type, className, id, placeholder, pattern, required} = this.props;
    return (
      <div>
        <input type={type} className={this.state.valid ? className: className+' invalid' } id={id} placeholder={placeholder} pattern={pattern} required={required}
               onFocus={this.disableValidationNotification} onChange={this.handleChange} onBlur={this.validateInputField}/>
          {!this.state.valid && <p className="Form__error-message">{this.state.displayMessage}</p>}
      </div>
    )
  }
}

export default InputField;
