import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {VoterTable} from '../components/VoterTable';
import {useMemo} from 'react';

import {
    createSortVotersAction,
    refreshVoters,
  } from '../actions/voter-tool.actions';
import { sortVotersSelector } from '../selectors/voter-tool.selectors';


export const VoterTableContainer = () => {
    const voters = useSelector(sortVotersSelector);
    const dispatch = useDispatch();

    const actions = useMemo(() =>
        bindActionCreators({
            onRefreshVoters: refreshVoters,
            onUpdateSortField: createSortVotersAction,
        }, dispatch),
        [dispatch],
    );

    return <VoterTable voters={voters} {...actions}/>
};