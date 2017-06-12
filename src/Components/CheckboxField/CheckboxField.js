import React, {Component} from 'react';

class CheckboxField extends Component {
  
  render() {
    return (
      <label className="Form__input Form__checkbox-container">
        <input type="checkbox" className="Form__checkbox" required={true}/>
        <p className="Form__custom-checkbox">
          I have read and agree to the Terms & Conditions and certify that I am 18 years of age. I acknowledge that
          the recurring membership will rebill at [[Price]] every 30 days, further notifications will be by email
          from
          [[domain]].
        </p>
      </label>
    )
  }
}

export default CheckboxField;
