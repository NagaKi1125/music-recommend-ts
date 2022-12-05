import { NextFunction, Request, Response } from 'express';
import { CustomRequest } from '../interfaces/CustomResponse.interface';
import { responseError, responseSuccess, responseSuccessWithData } from './base.controller';
import userSearchHistoryService from '../services/user-search-history.service';

export class UserSearchHistoryController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await userSearchHistoryService.getAll();
            return responseSuccessWithData(res, data);
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }

    async create(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            const data = await userSearchHistoryService.create(req.body, req.user!);
            return responseSuccessWithData(res, data);
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await userSearchHistoryService.deleteById(req.params.id);
            return responseSuccess(res, 'Delete success');
        } catch (error: any) {
            console.log(error);
            return responseError(res, error.message);
        }
    }
}