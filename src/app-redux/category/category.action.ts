import { GetCategorySuccessModel } from "../../models/category/GetCategorySucessModel";
import { CategoryActionType } from "./category.actiontype";

interface GetCategoryRequestAction{
    type: CategoryActionType.GET_CATEGORY_REQUEST
}

interface GetCategorySuccessAction{
    type: CategoryActionType.GET_CATEGORY_SUCCESS,
    payload: GetCategorySuccessModel[]
}

interface GetCategoryErrorAction{
    type: CategoryActionType.GET_CATEGORY_ERROR,
    payload: string
}

export type CategoryAction =
GetCategoryRequestAction
| GetCategorySuccessAction
| GetCategoryErrorAction