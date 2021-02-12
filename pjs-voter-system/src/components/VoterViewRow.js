export const VoterViewRow = ({voter, onEditVoter: editVoter, onRemoveVoter: removeVoter}) => {
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
        </tr>
    );
};