import { HTTP_METHOD, ROLE } from '../common/constants';
import { BaseRouter } from './basic.router';
import { auth } from '../middlewares/authorization.middleware';
import { CategoryController } from '../controllers/category.controller';
import { access } from 'fs';

export class CategoryRouter extends BaseRouter {
    private categoryController = new CategoryController();

    constructor() {
        super();
        this.init();
    }

    init() {
        this.route({
            method: HTTP_METHOD.GET,
            url: '/',
            action: this.categoryController.getAll,
            middleware: [auth([])]
        });
        this.route({
            method: HTTP_METHOD.POST,
            url: '/create',
            action: this.categoryController.create,
            middleware: [auth([ROLE.ADMIN])]
        });
        this.route({
            method: HTTP_METHOD.PUT,
            url: '/:id',
            action: this.categoryController.updateById,
            middleware: [auth([ROLE.ADMIN])]
        });
        this.route({
            method: HTTP_METHOD.DELETE,
            url: '/:id',
            action: this.categoryController.delete,
            middleware: [auth([ROLE.ADMIN])]
        });
    }
}