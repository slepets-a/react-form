import React, {Component} from 'react';
import './CheckboxField.css';

class CheckboxField extends Component {
  
  render() {
    let {text, className} = this.props.options;
    return (
      <label className={className}>
        <input type="checkbox" className="CheckboxField__checkbox"/>
        <p className="CheckboxField__custom-checkbox" dangerouslySetInnerHTML={{__html: text}}/>
      </label>
    )
  }
}

export default CheckboxField;
