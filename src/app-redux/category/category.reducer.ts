import { Reducer } from "react";
import { CategoryAction } from "./category.action";
import { CategoryActionType } from "./category.actiontype";
import { CategoryState } from "./category.state";

const initialState: CategoryState = {
    Categories: [],
    IsLoading: false,
    IsSuccess: false,
    ErrorMessage: ''
}

const CategoryReducer: Reducer<CategoryState, CategoryAction> = (state: CategoryState = initialState, action: CategoryAction) => {
    switch (action.type) {
        case CategoryActionType.GET_CATEGORY_REQUEST:
            return {
                ...state,
                IsLoading: true
            }

        case CategoryActionType.GET_CATEGORY_SUCCESS:
            console.log(action)
            return {
                ...state,
                IsLoading: false,
                IsSuccess: true,
                Categories: action.payload
            }

        case CategoryActionType.GET_CATEGORY_ERROR:
            return {
                ...state,
                IsLoading: false,
                IsSuccess: false,
                Categories: [],
                ErrorMessage: action.payload
            }

        default:
            return state;
    }
}

export default CategoryReducer;