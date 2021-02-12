import { useEffect } from "react";
import { ElectionViewRow } from "./ElectionViewRow";

export const ElectionTable = ({elections, onRefreshElections}) => {
    const electionTableItems = elections.map(election => {
        return <ElectionViewRow key={election.id} election={election} />;
    });

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
        </>
    );
};