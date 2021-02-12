import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addElection, createAddQuestionAction, createResetQuestionsAction } from '../actions/election-tool.actions';
import { ElectionForm } from '../components/ElectionForm';


export const AddElectionFormContainer = () => {

    const questions = useSelector(state => state.questions);

    const actions = bindActionCreators(
        {
            onAddQuestion: createAddQuestionAction,
            onAddElection: addElection,
            onResetQuestions: createResetQuestionsAction,
        },
        useDispatch(),
    );

    return <ElectionForm questions={questions} {...actions}/>;
};