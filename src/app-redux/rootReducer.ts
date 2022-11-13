import { combineReducers } from "redux";
import CategoryReducer from "./category/category.reducer";

const rootReducer = combineReducers({
    categoryReducer: CategoryReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;