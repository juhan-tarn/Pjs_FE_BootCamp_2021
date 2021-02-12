import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addVoter } from '../actions/voter-tool.actions';

import { VoterForm } from '../components/VoterForm';

export const AddVoterFormContainer = () => {
  const actions = bindActionCreators(
    {
      onAddVote: addVoter,
    },
    useDispatch(),
  );

  return <VoterForm buttonText="Submit" onSubmitVoter={actions.onAddVote} />;
};
