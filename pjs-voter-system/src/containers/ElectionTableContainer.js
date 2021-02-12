import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { refreshElections } from "../actions/election-tool.actions";
import { ElectionTable } from "../components/ElectionTable";

export const ElectionTableContainer = () => {
    const elections = useSelector(state => state.elections);

    const dispatch = useDispatch();

    const actions = useMemo(() => 
        bindActionCreators({
            onRefreshElections: refreshElections,
        }, dispatch),
        [dispatch],
    );
    
    return <ElectionTable elections={elections} {...actions} />;
};