import { useEffect } from "react";
import {VoterViewRow} from './VoterViewRow';
import {VoterEditRow} from './VoterEditRow';

export const VoterTable = ({voters, editVoterId, onRefreshVoters, onUpdateSortField, 
            onEditVoter, onCancelEditVoter, onSaveVoter, onRemoveVoter  }) => {
    const voterTableItems = voters.map(
        voter => {
            return ((voter.id === editVoterId) ? 
                <VoterEditRow key={voter.id} voter={voter}  
                            onSaveVoter={onSaveVoter}
                            onCancelEditVoter={onCancelEditVoter} 
                            /> : 
                <VoterViewRow key={voter.id} voter={voter} editVoterId={editVoterId}
                            onEditVoter={onEditVoter}
                            onRemoveVoter={onRemoveVoter} 
                            />);
        }
    );

    useEffect(() => {
        onRefreshVoters();
    }, [onRefreshVoters]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => onUpdateSortField('id')}>Voter ID</th>
                        <th onClick={() => onUpdateSortField('firstName')}>First Name</th>
                        <th onClick={() => onUpdateSortField('lastName')}>Last Name</th>
                        <th onClick={() => onUpdateSortField('address')}>Address</th>
                        <th onClick={() => onUpdateSortField('city')}>City</th>
                        <th onClick={() => onUpdateSortField('zipcode')}>Zipcode</th>
                        <th onClick={() => onUpdateSortField('birthdate')}>Birth Date</th>
                        <th onClick={() => onUpdateSortField('email')}>Email</th>
                        <th onClick={() => onUpdateSortField('phone')}>Phone</th>
                    </tr>

                </thead>
                <tbody>
                    {voterTableItems}
                </tbody>
            </table>
        </>
    );
};