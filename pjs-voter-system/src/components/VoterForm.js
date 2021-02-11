import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

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

  const submitVote = () => {
    props.onSubmitVote({
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
        />
      </div>
      <div>
        <label htmlFor="countyCity-input">County/City</label>
        <input
          type="text"
          id="countyCity-input"
          name="countyCity"
          value={voterForm.countyCity}
          onChange={change}
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
        />
      </div>
      <button type="button" onClick={submitVote}>
        {props.buttonText}
      </button>
    </form>
  );
};

VoterForm.defaultProps = {
  buttonText: 'Submit Vote',
};

VoterForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitVote: PropTypes.func.isRequired,
};
