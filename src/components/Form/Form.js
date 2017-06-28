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
    this.changeFieldStatus = this.changeFieldStatus.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
    this.state = {
      validationStatus: {
        'firstName': 'init',
        'lastName': 'init',
        'fakeCountry': 'init',
        'txtState': 'init',
        'address': 'init',
        'city': 'init',
        'zipCode': 'init',
        'ccn': 'init',
        'month': 'init',
        'year': 'init',
        'cvv2Code': 'init',
        'checkbox': 'init'
      },
      showCvvImage: false,
      selectData: {
        fakeCountry: {
          className: 'Form__input',
          id: 'fakeCountry',
          placeholder: 'Country',
          emptyMessage: 'Please, pick your country',
          data: [
            {value: 'UA', label: 'Ukraine'},
            {value: 'US', label: 'USA'},
            {value: 'UK', label: 'United Kingdom'}
          ]
        },
        month: {
          className: 'Form__input',
          id: 'month',
          placeholder: 'Month',
          emptyMessage: 'Please, pick the month',
          data: [
            {value: '01', label: 'January'},
            {value: '01', label: 'February'},
            {value: '01', label: 'March'},
            {value: '01', label: 'April'},
            {value: '01', label: 'May'},
            {value: '01', label: 'June'},
            {value: '01', label: 'July'},
            {value: '01', label: 'August'},
            {value: '01', label: 'September'},
            {value: '01', label: 'October'},
            {value: '01', label: 'November'},
            {value: '01', label: 'December'}
          ]
        },
        year: {
          className: 'Form__input',
          id: 'year',
          placeholder: 'Year',
          emptyMessage: 'Please, pick the year',
          data: [
            {value: '2017', label: '2017'},
            {value: '2018', label: '2018'},
            {value: '2019', label: '2019'},
            {value: '2020', label: '2020'},
            {value: '2021', label: '2021'},
            {value: '2022', label: '2022'},
            {value: '2023', label: '2023'},
            {value: '2024', label: '2024'},
            {value: '2025', label: '2025'},
            {value: '2026', label: '2026'},
            {value: '2027', label: '2027'}
          ]
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
          emptyMessage: 'Please, enter your name'
        },
        lastName: {
          type: 'text',
          className: 'Form__input',
          id: 'lastName',
          placeholder: 'Second Name',
          pattern: '^[A-Za-z]{2,10}$',
          errorMessage: 'Letters only. 10 characters max',
          emptyMessage: 'Please, enter your second name'
        },
        txtState: {
          type: 'text',
          className: 'Form__input',
          id: 'txtState',
          placeholder: 'Province / State',
          pattern: '^[A-Za-z ]{3,16}$',
          errorMessage: 'Letters only, 3-16 characters',
          emptyMessage: 'Field can\'t be empty'
        },
        address: {
          type: 'text',
          className: 'Form__input',
          id: 'address',
          placeholder: 'Address',
          pattern: '^[a-zA-Z0-9 /\\#$%&,]{3,25}$',
          errorMessage: 'Invalid input. 25 characters max',
          emptyMessage: 'Please, enter your address'
        },
        city: {
          type: 'text',
          className: 'Form__input',
          id: 'city',
          placeholder: 'City',
          pattern: '^[A-Za-z0-9]{3,12}$',
          errorMessage: '12 characters max. No special characters',
          emptyMessage: 'Please, enter your city'
        },
        zipCode: {
          type: 'text',
          className: 'Form__input',
          id: 'zipCode',
          placeholder: 'ZIP / Postal Code',
          pattern: '^[A-Za-z0-9]{3,6}$',
          errorMessage: '3-6 characters. Letters and digits only. No special characters',
          emptyMessage: 'Please, enter your ZIP-code'
        },
        ccn: {
          type: 'text',
          className: 'Form__input',
          id: 'ccn',
          placeholder: 'Card number',
          pattern: '^[0-9 ]{16,19}$',
          errorMessage: 'Card number can consist from digits and spaces',
          emptyMessage: 'This field can\'t be empty'
        },
        cvv2Code: {
          type: 'password',
          className: 'Form__input',
          id: 'cvv2Code',
          placeholder: 'CVV2',
          pattern: '^[0-9]{3}$',
          errorMessage: 'Must be 3 digits',
          emptyMessage: 'Field is required'
        }
      }
    }
  }
  
  toggleCvvImage() {
    this.setState({
      showCvvImage: !this.state.showCvvImage
    });
  }
  
  changeFieldStatus(field, status) {
    let newValidationStatus = this.state.validationStatus;
    newValidationStatus[field] = status;
    this.setState({
      validationStatus: newValidationStatus
    });
  }
  
  isFormValid() {
    for (let field in this.state.validationStatus) {
      if (this.state.validationStatus.hasOwnProperty(field)) {
        switch (this.state.validationStatus[field]) {
          case 'init':
            this.changeFieldStatus(field, 'invalid');
            return false;
    
          case 'invalid':
            return false;
    
          default:
            return true;
        }
      }
    }
  }
  
  submitHandle(event) {
    event.preventDefault();
    if (this.isFormValid()) {
      console.log('Form is ready. Need to store whole data in Redux store');
    }
  }
  
  render() {
    return (
      <form className="row Form" onSubmit={this.submitHandle}>
        <div className="col-12">
          <h5 className="Form__title">Account information</h5>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputField options={this.state.inputData.firstName} validationStatus={this.state.validationStatus.firstName} changeFieldStatus={this.changeFieldStatus}/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField options={this.state.inputData.lastName} validationStatus={this.state.validationStatus.lastName} changeFieldStatus={this.changeFieldStatus}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <SelectField options={this.state.selectData.fakeCountry} validationStatus={this.state.validationStatus.fakeCountry} changeFieldStatus={this.changeFieldStatus}/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField options={this.state.inputData.txtState} validationStatus={this.state.validationStatus.txtState} changeFieldStatus={this.changeFieldStatus}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <InputField options={this.state.inputData.address} validationStatus={this.state.validationStatus.address} changeFieldStatus={this.changeFieldStatus}/>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputField options={this.state.inputData.city} validationStatus={this.state.validationStatus.city} changeFieldStatus={this.changeFieldStatus}/>
            </div>
            <div className="col-12 col-sm-6">
              <InputField options={this.state.inputData.zipCode} validationStatus={this.state.validationStatus.zipCode} changeFieldStatus={this.changeFieldStatus}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <InputField options={this.state.inputData.ccn} validationStatus={this.state.validationStatus.ccn} changeFieldStatus={this.changeFieldStatus}/>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-4">
              <SelectField options={this.state.selectData.month} validationStatus={this.state.validationStatus.month} changeFieldStatus={this.changeFieldStatus}/>
            </div>
            <div className="col-12 col-md-4">
              <SelectField options={this.state.selectData.year} validationStatus={this.state.validationStatus.year} changeFieldStatus={this.changeFieldStatus}/>
            </div>
            <div className="col-12 col-md-4">
              <InputField options={this.state.inputData.cvv2Code} validationStatus={this.state.validationStatus.cvv2Code} changeFieldStatus={this.changeFieldStatus}/>
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
              id: 'checkbox',
              errorMessage: 'You must accept policies',
              required: 'true'
            }}
            validationStatus={this.state.validationStatus.checkbox}
            changeFieldStatus={this.changeFieldStatus}
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
