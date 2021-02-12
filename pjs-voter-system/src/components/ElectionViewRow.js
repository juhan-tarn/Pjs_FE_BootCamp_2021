export const ElectionViewRow = ({
    election,
    onViewResult: viewResult
}) => {
    return (
        <tr>
            <td>{election.id}</td>
            <td>{election.electionName}</td>
            <td>
                <button type='button' onClick={() => viewResult(election.id)}>View Results</button>
            </td>
        </tr>
    );
};