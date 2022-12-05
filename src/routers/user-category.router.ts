import { HTTP_METHOD, ROLE } from '../common/constants';
import { BaseRouter } from './basic.router';
import { auth } from '../middlewares/authorization.middleware';
import { validation } from '../middlewares/validation.middleware';
import { UserCategoryController } from '../controllers/user-category.controller';

export class UserCategoryRouter extends BaseRouter {
    private userCategoryController = new UserCategoryController();
    constructor() {
        super();
        this.init();
    }

    init() {
        this.route({
            method: HTTP_METHOD.GET,
            url: '/getAll',
            action: this.userCategoryController.getLikedCategories,
            middleware: [auth([])]
        });
        this.route({
            method: HTTP_METHOD.POST,
            url: '/like/:categoryId',
            action: this.userCategoryController.likeCategory,
            middleware: [auth([])]
        });
        this.route({
            method: HTTP_METHOD.DELETE,
            url: '/unlike/:id',
            action: this.userCategoryController.unlikeCategory,
            middleware: [auth([])]
        });
        this.route({
            method: HTTP_METHOD.GET,
            url: '/get/:id',
            action: this.userCategoryController.get,
            middleware: [auth([])]
        });
    }
}