import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {VoterTable} from '../components/VoterTable';
import {useMemo} from 'react';

import {
    createSortVotersAction, 
    createEditVoterAction, createCancelEditVoterAction, 
    createSelectVoterAction, createDeSelectVoterAction,
    createSelectAllVotersAction,
    refreshVoters, removeVoter, saveVoter, removeSelectedVoters
} from '../actions/voter-tool.actions';

import { sortVotersSelector } from '../selectors/voter-tool.selectors';

export const VoterTableContainer = () => {
    
    const voters = useSelector(sortVotersSelector).map( (v) => {
        return ( {...v, markedForDeletion: false } )
    });

    const editVoterId = useSelector (state => state.editVoterId);
    const selectedVoters = useSelector (state => state.selctedVoters)
    const dispatch = useDispatch();

    const actions = useMemo(() =>
        bindActionCreators({
            onRefreshVoters: refreshVoters,
            onUpdateSortField: createSortVotersAction,
            onEditVoter: createEditVoterAction,
            onCancelEditVoter: createCancelEditVoterAction,
            onSaveVoter: saveVoter,
            onRemoveVoter: removeVoter,
            onRemoveSelectedVoters: removeSelectedVoters,
            onSelectVoter: createSelectVoterAction,
            onSelectAllVoters: createSelectAllVotersAction,
            onDeSelectVoter: createDeSelectVoterAction,
        }, dispatch),
        [dispatch],
    );

    return <VoterTable 
                voters={voters} 
                selectedVoters={selectedVoters} 
                editVoterId={editVoterId} 
                {...actions}/>
};