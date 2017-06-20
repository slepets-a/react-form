import React, {Component} from 'react';
import './CheckboxField.css';

class CheckboxField extends Component {
  
  render() {
    let {text, className, required} = this.props.options;
    return (
      <label className={className}>
        <input type="checkbox" className="CheckboxField__checkbox" required={required}/>
        <p className="CheckboxField__custom-checkbox" dangerouslySetInnerHTML={{__html: text}}/>
      </label>
    )
  }
}

export default CheckboxField;
