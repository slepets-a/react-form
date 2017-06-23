import React, {Component} from 'react';
import './SelectField.css';

class SelectField extends Component {
  constructor(props) {
    super(props);
    this.disableValidationNotification = this.disableValidationNotification.bind(this);
    this.validateInputField = this.validateInputField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectValue: '',
      valid: 'init',
      displayMessage: this.props.options.emptyMessage
    }
  }
  
  disableValidationNotification() {
    this.props.changeFieldStatus(this.props.options.id, 'init');
  }
  
  handleChange(event) {
    this.setState({
      selectValue: event.target.value
    });
  }
  
  changeFieldStatus(status) {
    this.props.changeFieldStatus(this.props.options.id, status);
  }
  
  validateInputField() {
    let {emptyMessage} = this.props.options;
    let selectedOption = this.state.selectValue;
    if (selectedOption === '') {
      this.changeFieldStatus('invalid');
      this.setState({
        displayMessage: emptyMessage
      })
    } else {
      this.changeFieldStatus('valid');
    }
  }
  
  render() {
    let {className, id, placeholder, data} = this.props.options;
    return (
      <label className="SelectField__label">
        <select className={(this.props.validationStatus !== 'init') ? className + ' ' + this.props.validationStatus : className} id={id}
                defaultValue="" onFocus={this.disableValidationNotification} onChange={this.handleChange}
                onBlur={this.validateInputField}>
          <option value="" disabled={true}>{placeholder}</option>
          {data.map((option, index) => {
            return <option key={index} value={option.value}>{option.label}</option>
          })}
        </select>
        {this.props.validationStatus === 'invalid' && <p className="Form__error-message">{this.state.displayMessage}</p>}
      </label>
    )
  }
}

export default SelectField;
