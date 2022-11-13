import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../app-redux/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;