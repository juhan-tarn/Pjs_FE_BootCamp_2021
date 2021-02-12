export const ResultsViewRow = ({
    election,
    onViewResult: viewResult
}) => {
    const electionDisplayRow = election.questions.map(question => {
        return <div>
            <h4> Question: {question.question} </h4>
            <h4> Yes: {question.yes}</h4>
            <h4> No: {election.voterCount - question.yes}</h4>
        </div>
    });
    return (
        <>{electionDisplayRow}</>
    );
};