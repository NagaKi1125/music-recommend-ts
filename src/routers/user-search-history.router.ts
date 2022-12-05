import { HTTP_METHOD, ROLE } from '../common/constants';
import { BaseRouter } from './basic.router';
import { auth } from '../middlewares/authorization.middleware';
import { validation } from '../middlewares/validation.middleware';
import { schemaUser } from '../validations/user.validation';
import { uploadDiskStorage } from '../middlewares/upload.middleware';
import { UserSearchHistoryController } from '../controllers/user-search-history.controller';

export class UserSearchHistoryRouter extends BaseRouter {
    private userSearchHistoryController = new UserSearchHistoryController();

    constructor() {
        super();
        this.init();
    }

    init() {
        this.route({
            method: HTTP_METHOD.GET,
            url: '/',
            action: this.userSearchHistoryController.getAll,
            middleware: [auth([])]
        });
        this.route({
            method: HTTP_METHOD.POST,
            url: '/create',
            action: this.userSearchHistoryController.create,
            middleware: [auth([])]
        });
        this.route({
            method: HTTP_METHOD.DELETE,
            url: '/:id',
            action: this.userSearchHistoryController.delete,
            middleware: [auth([])]
        });
    }
}