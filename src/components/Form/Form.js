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
          className: 'Form__input',
          id: 'fakeCountry',
          placeholder: 'Country',
          emptyMessage: 'Please, pick your country',
          required: 'true',
          data: {
            'UA': 'Ukraine',
            'US': 'USA',
            'UK': 'United Kingdom'
          }
        },
        month: {
          className: 'Form__input',
          id: 'month',
          placeholder: 'Month',
          emptyMessage: 'Please, pick the month',
          required: 'true',
          data: {
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
          }
        },
        year: {
          className: 'Form__input',
          id: 'year',
          placeholder: 'Year',
          emptyMessage: 'Please, pick the year',
          required: 'true',
          data: {
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
      },
      inputData: {
        firstName: {
          type: 'text',
          className: 'Form__input',
          id: 'firstName',
          placeholder: 'First Name',
          pattern: '^[A-Za-z]{2,10}$',
          errorMessage: 'Letters only. 10 characters max',
          emptyMessage: 'Please, enter your name',
          required: 'true'
        },
        lastName: {
          type: 'text',
          className: 'Form__input',
          id: 'lastName',
          placeholder: 'Second Name',
          pattern: '^[A-Za-z]{2,10}$',
          errorMessage: 'Letters only. 10 characters max',
          emptyMessage: 'Please, enter your second name',
          required: 'true'
        },
        txtState: {
          type: 'text',
          className: 'Form__input',
          id: 'txtState',
          placeholder: 'Province / State',
          pattern: '^[A-Za-z ]{3,16}$',
          errorMessage: 'Letters only, 3-16 characters',
          emptyMessage: 'Field can\'t be empty',
          required: 'true'
        },
        address: {
          type: 'text',
          className: 'Form__input',
          id: 'address',
          placeholder: 'Address',
          pattern: '^[a-zA-Z0-9 /\\#$%&,]{3,25}$',
          errorMessage: 'Invalid input. 25 characters max',
          emptyMessage: 'Please, enter your address',
          required: 'true'
        },
        city: {
          type: 'text',
          className: 'Form__input',
          id: 'city',
          placeholder: 'City',
          pattern: '^[A-Za-z0-9]{3,12}$',
          errorMessage: '12 characters max. No special characters',
          emptyMessage: 'Please, enter your city',
          required: 'true'
        },
        zipCode: {
          type: 'text',
          className: 'Form__input',
          id: 'zipCode',
          placeholder: 'ZIP / Postal Code',
          pattern: '^[A-Za-z0-9]{3,6}$',
          errorMessage: '3-6 characters. Letters and digits only. No special characters',
          emptyMessage: 'Please, enter your ZIP-code',
          required: 'true'
        },
        ccn: {
          type: 'text',
          className: 'Form__input',
          id: 'ccn',
          placeholder: 'Card number',
          pattern: '^[0-9 ]{16,19}$',
          errorMessage: 'Card number can consist from digits and spaces',
          emptyMessage: 'This field can\'t be empty',
          required: 'true'
        },
        cvv2Code: {
          type: 'password',
          className: 'Form__input',
          id: 'cvv2Code',
          placeholder: 'CVV2',
          pattern: '^[0-9]{3}$',
          errorMessage: 'Must be 3 digits',
          emptyMessage: 'Field is required',
          required: 'true'
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
              <InputField options={this.state.inputData.firstName}/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField options={this.state.inputData.lastName}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <SelectField options={this.state.selectData.fakeCountry}/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField options={this.state.inputData.txtState}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <InputField options={this.state.inputData.address}/>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputField options={this.state.inputData.city}/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField options={this.state.inputData.zipCode}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <InputField options={this.state.inputData.ccn}/>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-4">
              <SelectField options={this.state.selectData.month}/>
            </div>
            <div className="col-12 col-md-4">
              <SelectField options={this.state.selectData.year}/>
            </div>
            <div className="col-12 col-md-4">
              <InputField options={this.state.inputData.cvv2Code}/>
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
          <CheckboxField
            options={{
              text: 'I have read and agree to the <a href="#" target="_blank">Terms & Conditions</a> and certify that I am 18 years of age. I acknowledge that the recurring membership will rebill at [[Price]] every 30 days, further notifications will be by email from [[domain]]',
              className: 'Form__input Form__checkbox-container',
              required: 'true'
            }}
          />
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
