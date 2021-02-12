import { useForm } from '../hooks/useForm';

const getInitElectionForm = () => ({
    electionName: "",
    question: "",
});

export const ElectionForm = ({questions, onAddQuestion, onAddElection}) => {

    const [electionForm, change, resetElectionForm] = useForm(getInitElectionForm());
    const displayQuestionItems = questions.map(question => {
        return (
            <li key={question}>{question}</li>
        );
    });

    const addQuestion = () => {
        onAddQuestion(electionForm.question);
    };

    const addElection = () => {
        const electionToAdd = {
            electionName: electionForm.electionName,
            voterCount: 0,
            questions: questions.map(
                question => {
                    return {question: question, yes: 0}
            }),
        }

        onAddElection(electionToAdd);
        resetElectionForm();
    };

    return (
        <>
            <form>
                <div>
                    <label htmlFor="electionName-input">Election Name: </label>
                    <input 
                        type="text"
                        id="electionName-input"
                        name="electionName"
                        value={electionForm.electionName}
                        onChange={change}
                    />

                    <ul>
                        {displayQuestionItems}
                    </ul>
                    

                    <label htmlFor="question-input">Question: </label>
                    <input
                        type='text'
                        id="question-input"
                        name="question"
                        value={electionForm.question}
                        onChange={change}
                    />

                    <button type='button' onClick={addQuestion}>Add Question: </button>
                </div>
                <button type='button' onClick={addElection}>Submit Election</button>
            </form>
        </>
    );
};