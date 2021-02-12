import PropTypes from 'prop-types';
import { useState } from 'react';

import { useForm } from '../hooks/useForm';
import { checkRequiredText, checkValidEmail, checkValidZip, checkValidPhone} from '../utils'

const getInitVoterForm = () => ({
  firstName: '',
  lastName: '',
  address: '',
  countyCity: '',
  birthdate: '',
  email: '',
  phone: '',
});

export const VoterForm = props => {
  const [voterForm, change, resetVoterForm] = useForm(getInitVoterForm());

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidFn, setIsValidFn] = useState(false);
  const [isValidLn, setIsValidLn] = useState(true);
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [isValidCity, setIsValidCity] = useState(true);
  const [isValidZip, setIsValidZip] = useState(true);
  const [isValidBirthDate, setIsValidBirthDate] = useState(true);

  const submitVoter = () => {
    props.onSubmitVoter({
      ...voterForm,
    });

    resetVoterForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="firstName-input">First Name</label>
        <input
          type="text"
          id="firstName-input"
          name="firstName"
          value={voterForm.firstName}
          onChange={change}
          className={ isValidFn ? "ok" : "error"}
          onBlur={(e) => { setIsValidFn(checkRequiredText(e.target.value)) } }
        />
      </div>
      <div>
        <label htmlFor="lastName-input">Last Name</label>
        <input
          type="text"
          id="lastName-input"
          name="lastName"
          value={voterForm.lastName}
          onChange={change}
          className={ isValidLn ? "ok" : "error"}
          onBlur={(e) => { setIsValidLn(checkRequiredText(e.target.value)) } }
        />
      </div>
      <div>
        <label htmlFor="address-input">Address</label>
        <input
          type="text"
          id="address-input"
          name="address"
          value={voterForm.address}
          onChange={change}
          className={ isValidAddress ? "ok" : "error"}
          onBlur={(e) => { setIsValidAddress(checkRequiredText(e.target.value)) } }

        />
      </div>
      <div>
        <label htmlFor="city-input">City</label>
        <input
          type="text"
          id="city-input"
          name="city"
          value={voterForm.city}
          onChange={change}
          className={ isValidCity ? "ok" : "error"}
          onBlur={(e) => { setIsValidCity(checkRequiredText(e.target.value)) } }

        />
      </div>

      <div>
        <label htmlFor="birthdate-input">Birthdate</label>
        <input
          type="text"
          id="birthdate-input"
          name="birthdate"
          value={voterForm.birthdate}
          onChange={change}
          className={ isValidBirthDate ? "ok" : "error"}
          onBlur={(e) => { setIsValidBirthDate(checkRequiredText(e.target.value)) } }
        />
      </div>

      <div>
        <label htmlFor="zip-input">ZipCode</label>
        <input
          type="text"
          id="zip-input"
          name="zip"
          value={voterForm.zip}
          onChange={change}
          className={ isValidZip ? "ok" : "error"}
          onBlur={(e) => { checkValidZip(e.target.value) ? setIsValidZip(true) : setIsValidZip(false)}}
        />
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <input
          type="text"
          id="email-input"
          name="email"
          value={voterForm.email}
          onChange={change}
          className={ isValidEmail ? "ok" : "error"}
          onBlur={(e) => { checkValidEmail(e.target.value) ? setIsValidEmail(true) : setIsValidEmail(false)}}
        />
      </div>

      <div>
        <label htmlFor="phone-input">Phone</label>
        <input
          type="text"
          id="phone-input"
          name="phone"
          value={voterForm.phone}
          onChange={change}
          className={ isValidPhone ? "ok" : "error"}
          onBlur={(e) => { checkValidPhone(e.target.value) ? setIsValidPhone(true) : setIsValidPhone(false)}}
        />
      </div>

      <button type="button" onClick={ (isValidEmail && 
          isValidPhone &&
          isValidLn &&
          isValidFn &&
          isValidPhone &&
          isValidAddress &&
          isValidCity &&
          isValidZip
          )? submitVoter : null}>
        {props.buttonText}
      </button>
    </form>
  );
};

VoterForm.defaultProps = {
  buttonText: 'Submit Voter',
};

VoterForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitVoter: PropTypes.func.isRequired,
};
