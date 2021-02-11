import PropTypes from 'prop-types';

export const VotePropType = PropTypes.shape({
  firstName: PropTypes.string.isRequired, 
  lastName: PropTypes.string.isRequired, 
  address: PropTypes.string.isRequired, 
  countyCity: PropTypes.string.isRequired, 
  birthdate: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired, 
  phone: PropTypes.string.isRequired,
});

export const VotesPropType = PropTypes.arrayOf(VotePropType);