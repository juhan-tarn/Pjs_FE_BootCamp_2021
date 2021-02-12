export const VoterViewRow = ({
    voter, 
    selectedVoters,
    onEditVoter: editVoter, 
    onRemoveVoter: removeVoter,
    onSelectVoter: selectVoter,
    onDeSelectVoter: deselectVoter
}) => {

    return (
        <tr>
            <td>{voter.id}</td>
            <td>{voter.firstName}</td>
            <td>{voter.lastName}</td>
            <td>{voter.address}</td>
            <td>{voter.city}</td>
            <td>{voter.zipcode}</td>
            <td>{voter.birthdate}</td>
            <td>{voter.email}</td>
            <td>{voter.phone}</td>
            <td>
                <button type="button" onClick={() => {
                    editVoter(voter.id);
                }}>
                    Edit
                </button>
            </td>
            <td>
                <button type="button" onClick={() => {
                    removeVoter(voter.id);
                }}>
                    Delete
                </button>
            </td>
            <td>
                <input type="checkbox" value="deletedVoterId" 
                    checked={ ( selectedVoters.indexOf(voter.id) >= 0) ? true : false  } 
                    onChange={ (e)=> {
                        console.log(e.target.checked);                        
                        e.target.checked ? selectVoter(voter.id) : deselectVoter(voter.id);
                        console.log(selectedVoters);
                    }}
                />
            </td>
        </tr>
    );
};