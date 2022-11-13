import { GetCategorySuccessModel } from "../../models/category/GetCategorySucessModel";

export interface CategoryState {
    IsLoading: boolean,
    IsSuccess: boolean,
    ErrorMessage: string,
    Categories: GetCategorySuccessModel[]
}