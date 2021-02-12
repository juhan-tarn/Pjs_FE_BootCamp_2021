import { useEffect } from "react";
import { ElectionViewRow } from "./ElectionViewRow";
import { ResultsViewRow } from "./ResultsViewRow";

export const ElectionTable = ({
    resultId,
    elections, 
    onRefreshElections, 
    onViewResult: viewResult}) => 
    {
    const electionTableItems = elections.map(election => {
        return <ElectionViewRow key={election.id} election={election} onViewResult={viewResult} />;
    });
    
    const resultItems = elections.map(election => {
        return (resultId === election.id) ? <ResultsViewRow election={election} key={election.id}/> : null ; 
    })

    useEffect(() => {
        onRefreshElections();
    }, [onRefreshElections]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Election Id</th>
                        <th>Election Name</th>
                        <th>View Results</th>
                    </tr>
                </thead>
                <tbody>
                    {electionTableItems}
                </tbody>
            </table>
            {resultItems}
        </>
    );
};