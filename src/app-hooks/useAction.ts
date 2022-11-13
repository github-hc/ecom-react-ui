import { useDispatch } from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../app-redux/combineActionCreator";

export const useAction =()=>{
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
}