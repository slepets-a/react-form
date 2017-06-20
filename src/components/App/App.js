import React, {Component} from 'react';
import './App.css';

import Form from  '../Form/Form';

class App extends Component {
  render() {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    
    return (
      <div className="App">
        <div className="App__header">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                      data-target="#navigation" aria-controls="navigation" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a href="/" className="navbar-brand">Navbar</a>
              
              <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a href="/" className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Support
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/*end App__header*/}
        <div className="container App__body">
          <div className="row">
            <div className="col-12 col-sm-6 App__form">
              <Form/>
            </div>
            <div className="col-12 col-sm-6 App__description description">
              <div>
                <h5 className="description__title">
                  Premium content upgrade
                </h5>
                <p className="description__text">
                  Premium membership plans help you take advantage of everything [[sitename]] has in store! Get
                  unlimited
                  access to Premium games, music, books, movies! Regular members only recive acess to limited content.
                </p>
                <h5 className="description__title">
                  Service details
                </h5>
                <p className="description__text">
                  We make sure to provide our members with a detailed transaction history so that they know what they
                  are
                  paying for. Credit card information is required to facilitate future purchases only. All charges will
                  appear on credit card statement as [[Descriptor]] as the descriptor.
                </p>
                <p className="description__text">
                  You can cancel your membership at any time, free of charge via telephone <a href="tel:18888888888"
                                                                                              className="text-muted">[[1-888--888-8888]]</a>,
                  <a href="tel:19999999999" className="text-muted">[[1-999–999-9999]]</a> or via our online-form
                  available subsequent to signup (for more details, please
                  refer
                  to our cancellation policy in the <a href="/" className="text-muted" target="_blank"
                                                       rel="noopener noreferrer">Terms & Conditions</a>). All our
                  [[SiteName]] members have access to a
                  quickly expanding library of entertainment. Play games, movies and music, here on [[SiteName]].
                </p>
                <h5 className="description__title">
                  Contact address:
                </h5>
                <p className="description__text">
                  [[COUNTRY]]<br/>
                  [[CORP NAME]]<br/>
                  [[123 STREET ADDRESS]]<br/>
                  [[CITY]]<br/>
                  [[ZIPCODE]]
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*end App__body*/}
        <div className="App__footer footer">
          <a href="https://www.linkedin.com/in/artemslepets/" className="footer__link" target="_blank" rel="noopener noreferrer">©</a> {currentYear} Artem Slepets
        </div>
        {/*end App__footer*/}
      </div>
    )
  }
}

export default App;
