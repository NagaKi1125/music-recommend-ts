import { NextFunction, Request, Response } from 'express';
import { CustomRequest } from '../interfaces/CustomResponse.interface';
import userCategoryService from '../services/user-category.service';
import { responseError, responseSuccess, responseSuccessWithData } from './base.controller';
export class UserCategoryController {
    async getLikedCategories(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            const data = await userCategoryService.getAllUserLikedCategory(req.user!);
            return responseSuccessWithData(res, data);
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }

    async likeCategory(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            const data = await userCategoryService.likeCategory(req.params.categoryId, req.user!);
            return responseSuccess(res, 'Success');
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }

    async unlikeCategory(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            const data = await userCategoryService.unlikeCategory(req.params.id);
            return responseSuccess(res, "Unlike success");
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }

    async get(req: CustomRequest, res: Response, next: NextFunction){
        try {
            const data = await userCategoryService.getUserLikeCategories(req.params.id);
            return responseSuccessWithData(res,data);
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }


}