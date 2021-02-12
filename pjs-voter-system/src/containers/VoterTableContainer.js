import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {VoterTable} from '../components/VoterTable';
import {useMemo} from 'react';

import {
    createSortVotersAction, createEditVoterAction, createCancelEditVoterAction,
    refreshVoters, removeVoter, saveVoter
  } from '../actions/voter-tool.actions';
import { sortVotersSelector } from '../selectors/voter-tool.selectors';


export const VoterTableContainer = () => {
    const voters = useSelector(sortVotersSelector);
    const editVoterId = useSelector (state => state.editVoterId);
    const dispatch = useDispatch();

    const actions = useMemo(() =>
        bindActionCreators({
            onRefreshVoters: refreshVoters,
            onUpdateSortField: createSortVotersAction,
            onEditVoter: createEditVoterAction,
            onCancelEditVoter: createCancelEditVoterAction,
            onSaveVoter: saveVoter,
            onRemoveVoter: removeVoter,
        }, dispatch),
        [dispatch],
    );

    return <VoterTable voters={voters} editVoterId={editVoterId} {...actions}/>
};