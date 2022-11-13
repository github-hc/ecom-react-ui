import{Dispatch} from "redux";
import { CategoryService } from "../../services/category.service";
import { CategoryAction } from "./category.action";
import { CategoryActionType } from "./category.actiontype";

export const GetCategories = () => async(dispatch: Dispatch<CategoryAction>)=>{
    try{
        dispatch({
            type: CategoryActionType.GET_CATEGORY_REQUEST
        });

        const categoryResponse = await CategoryService.getCategories();
        if(categoryResponse && categoryResponse.data.length > 0){
            dispatch({
                type: CategoryActionType.GET_CATEGORY_SUCCESS,
                payload: categoryResponse.data
            });
        }
    }
    catch(ex: any){
        dispatch({
            type: CategoryActionType.GET_CATEGORY_SUCCESS,
            payload: ex
        });
    }
}