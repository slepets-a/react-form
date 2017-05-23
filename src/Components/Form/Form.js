import React, { Component } from 'react';
import './Form.css';
import CardImage from './card.png';

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
              <input type="text" className="Form__input" id="fakeCountry" placeholder="Country" required={true}/>
            </div>
            <div className="col-12 col-sm-6">
              <input type="text" className="Form__input" id="txtState" placeholder="Province / State" required={true}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <input type="text" className="Form__input" id="address" placeholder="Address" required={true}/>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <input type="text" className="Form__input" id="city" placeholder="City" required={true}/>
            </div>
            <div className="col-12 col-sm-6">
              <input type="text" className="Form__input" id="zipCode" placeholder="ZIP / Postal Code" required={true}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <input type="text" className="Form__input" id="ccn" placeholder="Card number" required={true}/>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-4">
              <input type="text" className="Form__input" id="month" placeholder="Month" required={true}/>
            </div>
            <div className="col-12 col-sm-4">
              <input type="text" className="Form__input" id="year" placeholder="Year" required={true}/>
            </div>
            <div className="col-12 col-sm-4">
              <input type="text" className="Form__input" id="cvv2Code" placeholder="CVV2" required={true}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-4 col-sm-12 col-md-4">
              <img src={CardImage} alt="Logos"/>
            </div>
            <div className="col-8 col-sm-12 col-md-8 text-right">
              <button className="btn btn-link" id="ccv">Where is my digit CVV2?</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;