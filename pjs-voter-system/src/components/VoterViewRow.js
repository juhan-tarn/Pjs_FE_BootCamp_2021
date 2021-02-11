export const VoterViewRow = ({voter}) => {
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
                <button type="button" onClick={() => console.log('Edit single Voter')}>
                    Edit
                </button>
            </td>
            <td>
                <button type="button" onClick={() => console.log('Delete single Voter')}>
                    Delete
                </button>
            </td>
        </tr>
    );
};