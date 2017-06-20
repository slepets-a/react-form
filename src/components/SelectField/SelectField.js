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
      displayMessage: ''
    }
  }
  
  disableValidationNotification() {
    this.setState({
      valid: 'init'
    })
  }
  
  handleChange(event) {
    this.setState({
      selectValue: event.target.value
    });
  }
  
  validateInputField() {
    let {emptyMessage} = this.props.options;
    if (this.state.selectValue !== '') {
      this.setState({
        valid: 'valid'
      });
      console.log('Field is valid');
    } else {
      this.setState({
        valid: 'invalid',
        displayMessage: emptyMessage
      })
    }
  }
  
  render() {
    let {className, id, placeholder, required} = this.props.options;
    return (
      <label className="SelectField__label">
        <select className={(this.state.valid !== 'init') ? className + ' ' + this.state.valid : className} id={id}
                required={required}
                defaultValue="" onFocus={this.disableValidationNotification} onChange={this.handleChange}
                onBlur={this.validateInputField}>
          <option value="" disabled={true}>{placeholder}</option>
          {Object.entries(this.props.options.data).map((option, index) => {
            return <option key={index} value={option[0]}>{option[1]}</option>
          })}
        </select>
        {this.state.valid === 'invalid' && <p className="Form__error-message">{this.state.displayMessage}</p>}
      </label>
    )
  }
}

export default SelectField;
