import { NextFunction, Request, response, Response } from 'express';
import { CustomRequest } from '../interfaces/CustomResponse.interface';
import categoryService from '../services/category.service';
import { responseError, responseSuccess, responseSuccessWithData } from './base.controller';

export class CategoryController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await categoryService.getAll();
            return responseSuccessWithData(res, data);
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await categoryService.create(req.body);
            return responseSuccessWithData(res, data);
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }

    async updateById(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            await categoryService.update(req.params.id, req.body.category);
            return responseSuccess(res, 'Category updated successfully');
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await categoryService.delete(req.params.id);
            return responseSuccess(res, 'Delete category success');
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }
}