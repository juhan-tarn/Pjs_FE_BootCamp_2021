import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { refreshElections, createViewResultAction } from "../actions/election-tool.actions";
import { ElectionTable } from "../components/ElectionTable";

export const ElectionTableContainer = () => {
    const elections = useSelector(state => state.elections);
    const resultId = useSelector(state => state.resultId);

    const dispatch = useDispatch();

    const actions = useMemo(() => 
        bindActionCreators({
            onRefreshElections: refreshElections,
            onViewResult: createViewResultAction,
        }, dispatch),
        [dispatch],
    );
    console.log("result ID"+ resultId);
    return <ElectionTable elections={elections} resultId={resultId} {...actions} />;
};