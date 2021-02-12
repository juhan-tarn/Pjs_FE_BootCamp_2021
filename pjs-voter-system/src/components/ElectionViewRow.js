export const ElectionViewRow = ({election}) => {
    return (
        <tr>
            <td>{election.id}</td>
            <td>{election.electionName}</td>
            <td>
                <button type='button'>View Results</button>
            </td>
        </tr>
    );
};