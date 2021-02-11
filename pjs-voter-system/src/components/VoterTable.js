import { useEffect } from "react";
import {VoterViewRow} from './VoterViewRow';

export const VoterTable = ({voters, onRefreshVoters, onUpdateSortField}) => {


    const voterTableItems = voters.map(
        voter => {
            return (voter.isEdit ? <VoterViewRow key={voter.id} voter={voter} /> : <VoterViewRow key={voter.id} voter={voter}/>);
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