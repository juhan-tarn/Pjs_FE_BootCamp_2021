import { useEffect } from "react";
import {VoterViewRow} from './VoterViewRow';
import {VoterEditRow} from './VoterEditRow';
import { stubTrue } from "lodash";

export const VoterTable = ({voters, editVoterId, selectedVoters,
            onRefreshVoters, onUpdateSortField, 
            onEditVoter, onCancelEditVoter, 
            onSaveVoter, onRemoveVoter, 
            onSelectVoter, onDeSelectVoter, onSelectAllVoters,
            onRemoveSelectedVoters }) => {


    const voterTableItems = voters.map(
        voter => {
            return ((voter.id === editVoterId) ? 
                <VoterEditRow key={voter.id} voter={voter}  
                            onSaveVoter={onSaveVoter}
                            onCancelEditVoter={onCancelEditVoter} 
                            /> : 
                <VoterViewRow key={voter.id} voter={voter} selectedVoters={selectedVoters}
                            editVoterId={editVoterId}
                            onEditVoter={onEditVoter}
                            onRemoveVoter={onRemoveVoter} 
                            onSelectVoter={onSelectVoter}
                            onDeSelectVoter={onDeSelectVoter}
                            />);
        }
    );

    useEffect(() => {
        onRefreshVoters();
    }, [onRefreshVoters]);

    return (
        <>
            <form>
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
                <tfoot>
                    <tr></tr>
                    <tr></tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        { (voters.length > 0) &&
                            <button type="button"  onClick={() => {
                                onSelectAllVoters(voters)
                            }}>Select All Voters</button>
                        }
                        </td>
                        <td>
                        { (selectedVoters.length > 0) &&
                        <button type="button"                             
                            onClick={() => {
                                onRemoveSelectedVoters(selectedVoters);
                            }}> Remove Voters
                        </button>
                        }
                        </td>


                    </tr>
                </tfoot>
            </table>
            </form>

        </>
    );
};