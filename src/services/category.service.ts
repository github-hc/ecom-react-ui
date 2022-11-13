import { GetCategorySuccessModel } from "../models/category/GetCategorySucessModel"
import { ApiUrlConst } from "./config/apiUrlConst"
import { AxiosProvider } from "./config/axiosProvider"

const getCategories = async ()=>{
    const result = await AxiosProvider.get<GetCategorySuccessModel[]>(ApiUrlConst.GetCategoriesURL);
    console.log(result);
    return result;
}

export const CategoryService ={
    getCategories
}