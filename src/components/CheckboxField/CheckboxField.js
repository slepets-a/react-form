import React, {Component} from 'react';
import './CheckboxField.css';

class CheckboxField extends Component {
  constructor(props) {
    super(props);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.changeFieldStatus = this.changeFieldStatus.bind(this);
    this.state = {
      displayMessage: this.props.options.errorMessage
    }
  }
  
  toggleCheckbox() {
    let {validationStatus} = this.props;
    if (validationStatus === 'init') {
      this.changeFieldStatus('valid')
    } else {
      validationStatus === 'valid' ? this.changeFieldStatus('invalid') : this.changeFieldStatus('valid')
    }
  }
  
  changeFieldStatus(status) {
    this.props.changeFieldStatus(this.props.options.id, status);
  }
  
  render() {
    let {text, className} = this.props.options;
    return (
      <div>
        <label className={(this.props.validationStatus !== 'init') ? className + ' ' + this.props.validationStatus : className}
                onChange={this.toggleCheckbox}>
          <input type="checkbox" className="CheckboxField__checkbox"/>
          <p className="CheckboxField__custom-checkbox" dangerouslySetInnerHTML={{__html: text}}/>
        </label>
        {this.props.validationStatus === 'invalid' && <p className="Form__error-message">{this.state.displayMessage}</p>}
      </div>
    )
  }
}

export default CheckboxField;
