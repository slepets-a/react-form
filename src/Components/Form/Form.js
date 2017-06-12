import React, {Component} from 'react';
import './Form.css';
import CardImage from './card.png';
import ccvImage from './ccv.png';

import InputField from '../InputField/InputField';
import SelectField from '../SelectField/SelectField';
import CheckboxField from '../CheckboxField/CheckboxField';

class Form extends Component {
  
  constructor(props) {
    super(props);
    this.toggleCvvImage = this.toggleCvvImage.bind(this);
    this.state = {
      showCvvImage: false,
      selectData: {
        fakeCountry: {
          'UA': 'Ukraine',
          'US': 'USA',
          'UK': 'United Kingdom'
        },
        month: {
          '01': 'January',
          '02': 'February',
          '03': 'March',
          '04': 'April',
          '05': 'May',
          '06': 'June',
          '07': 'July',
          '08': 'August',
          '09': 'September',
          '10': 'October',
          '11': 'November',
          '12': 'December'
        },
        year: {
          '2017': '2017',
          '2018': '2018',
          '2019': '2019',
          '2020': '2020',
          '2021': '2021',
          '2022': '2022',
          '2023': '2023',
          '2024': '2024',
          '2025': '2025',
          '2026': '2026',
          '2027': '2027',
          '2028': '2028'
        }
      }
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
              <InputField type="text" className="Form__input" id="firstName" placeholder="First Name"
                          pattern="^[A-Za-z]{2,10}$" errorMessage="Letters only. 10 characters max"
                          emptyMessage="Please, enter your name" required="true"/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField type="text" className="Form__input" id="lastName" placeholder="Second Name"
                          pattern="^[A-Za-z]{2,10}$" errorMessage="Letters only. 10 characters max"
                          emptyMessage="Please, enter your second name" required="true"/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <SelectField className="Form__input" id="fakeCountry" required={true}
                           emptyMessage="Please, pick your country" placeholder="Country" defaultValue=""
                           data={this.state.selectData.fakeCountry}/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField type="text" className="Form__input" id="txtState" placeholder="Province / State"
                          pattern="^[A-Za-z ]{3,16}$" errorMessage="Letters only, 3-16 characters"
                          emptyMessage="Field can't be empty" required="true"/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <InputField type="text" className="Form__input" id="address" placeholder="Address"
                      pattern="^[a-zA-Z0-9 /\\#$%&,]{3,25}$" errorMessage="Invalid input. 25 characters max"
                      emptyMessage="Please, enter your address" required="true"/>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputField type="text" className="Form__input" id="city" placeholder="City" pattern="^[A-Za-z0-9]{3,12}$"
                          errorMessage="12 characters max. No special characters"
                          emptyMessage="Please, enter your city" required="true"/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField type="text" className="Form__input" id="zipCode" placeholder="ZIP / Postal Code"
                          pattern="^[A-Za-z0-9]{3,6}$" errorMessage="3-6 characters. Letters and digits only"
                          emptyMessage="Please, enter your ZIP-code" required="true"/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <InputField type="text" className="Form__input" id="ccn" placeholder="Card number" pattern="^[0-9 ]{16,19}$"
                      errorMessage="Card number can consist from digits and spaces"
                      emptyMessage="This field can't be empty" required="true"/>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-4">
              <SelectField className="Form__input" id="month" required={true} emptyMessage="Please, pick the month"
                           placeholder="Month" defaultValue="" data={this.state.selectData.month}/>
            </div>
            <div className="col-12 col-md-4">
              <SelectField className="Form__input" id="year" required={true} emptyMessage="Please, pick the year"
                           placeholder="Year" defaultValue="" data={this.state.selectData.year}/>
            </div>
            <div className="col-12 col-md-4">
              <InputField type="password" className="Form__input" id="cvv2Code" placeholder="CVV2" pattern="^[0-9]{3}$"
                          errorMessage="Must be 3 digits"
                          emptyMessage="Field is required" required="true"/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-4">
              <img src={CardImage} alt="Logos"/>
            </div>
            <div className="col-12 col-md-8 text-center medium-text-right">
              <button className="btn btn-link Form__where-is-cvv" type="button" id="ccv" onClick={this.toggleCvvImage}>
                Where is my digit CVV2?
              </button>
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
          <CheckboxField className="Form__input Form__checkbox-container" required="true"/>
        </div>
        <div className="col-12 text-center">
          <input type="submit" className="Form__submit-button"/>
          <p className="Form__protected-text">All users are protected by our Service Guarantee. Your information will be
            safe as we employ the finest security measures to protect our members. We value your privacy and will not
            sell or rent your private information to third parties.</p>
        </div>
      </form>
    )
  }
}

export default Form;
