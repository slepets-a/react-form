import React, {Component} from 'react';
import './Form.css';
import CardImage from './card.png';
import ccvImage from './ccv.png';

import InputField from '../InputField/InputField';

class Form extends Component {
  
  constructor(props) {
    super(props);
    this.toggleCvvImage = this.toggleCvvImage.bind(this);
    this.state = {
      showCvvImage: false
    }
  }
  
  toggleCvvImage() {
    this.setState({
      showCvvImage: !this.state.showCvvImage
    });
  }
  
  render() {
    return (
      <form className="row Form">
        <div className="col-12">
          <h5 className="Form__title">Account information</h5>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputField type="text" className="Form__input" id="firstName" placeholder="First Name" pattern="[A-Za-z]{2,10}" required="true"/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField type="text" className="Form__input" id="lastName" placeholder="Second Name" pattern="[A-Za-z]{2,10}" required="true"/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <select className="Form__input" id="fakeCountry" placeholder="Country" required={true} defaultValue="">
                <option value="" disabled={true}>Country</option>
                <option value="UA">Ukraine</option>
                <option value="US">USA</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div className="col-12 col-sm-6">
              <InputField type="text" className="Form__input" id="txtState" placeholder="Province / State" pattern="[A-Za-z ]{3,16}" required="true"/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <InputField type="text" className="Form__input" id="address" placeholder="Address" required="true"/>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputField type="text" className="Form__input" id="city" placeholder="City" pattern="[A-Za-z0-9]{3,12}" required="true"/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField type="text" className="Form__input" id="zipCode" placeholder="ZIP / Postal Code" pattern="[A-Za-z0-9]{3,6}" required="true"/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <InputField type="text" className="Form__input" id="ccn" placeholder="Card number" pattern="[0-9 ]{16,19}" required="true"/>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-4">
              <select className="Form__input" id="month" placeholder="Month" required={true} defaultValue="">
                <option value="" disabled={true}>Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="col-12 col-md-4">
              <select className="Form__input" id="year" placeholder="Year" required={true} defaultValue="">
                <option value="" disabled={true}>Year</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
            </div>
            <div className="col-12 col-md-4">
              <InputField type="password" className="Form__input" id="cvv2Code" placeholder="CVV2" pattern="[0-9]{3}" required="true"/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-4">
              <img src={CardImage} alt="Logos"/>
            </div>
            <div className="col-12 col-md-8 text-center medium-text-right">
              <button className="btn btn-link Form__where-is-cvv" type="button" id="ccv" onClick={this.toggleCvvImage}>Where is my digit CVV2?</button>
              {this.state.showCvvImage && <img src={ccvImage} alt="Where is CVV2 code" className="Form__ccv-image"/>}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="Form__membership-description">
            1 Month Membership: $XX.XX
          </div>
        </div>
        <div className="col-12">
          <label className="Form__input Form__checkbox-container">
            <input type="checkbox" className="Form__checkbox" required={true}/>
            <p className="Form__custom-checkbox">
              I have read and agree to the Terms & Conditions and certify that I am 18 years of age. I acknowledge that
              the recurring membership will rebill at [[Price]] every 30 days, further notifications will be by email from
              [[domain]].
            </p>
          </label>
        </div>
        <div className="col-12 text-center">
          <input type="submit" className="Form__submit-button"/>
          <p className="Form__protected-text">All users are protected by our Service Guarantee. Your information will be safe as we employ the finest security measures to protect our members. We value your privacy and will not sell or rent your private information to third parties.</p>
        </div>
      </form>
    )
  }
}

export default Form;
