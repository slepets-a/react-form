import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="row Form">
        <div className="col-12">
          <h5 className="Form__title">Account information</h5>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <input type="text" className="Form__input" id="firstName" placeholder="First Name" required={true}/>
            </div>
            <div className="col-12 col-sm-6">
              <input type="text" className="Form__input" id="lastName" placeholder="Second Name" required={true}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <input type="text" className="Form__input" id="country" placeholder="Country" required={true}/>
            </div>
            <div className="col-12 col-sm-6">
              <input type="text" className="Form__input" id="state" placeholder="Province / State" required={true}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <input type="text" className="Form__input" id="address" placeholder="Address" required={true}/>
        </div>
      </div>
    )
  }
}

export default Form;