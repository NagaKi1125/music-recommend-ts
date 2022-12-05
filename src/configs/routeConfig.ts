import { Application } from 'express';
import { AuthRouter } from '../routers/auth.router';
import { UserSearchHistoryRouter } from '../routers/user-search-history.router';
import { UserRouter } from '../routers/user.router';
import { CategoryRouter } from '../routers/category.router';
import { UserCategoryRouter } from '../routers/user-category.router';

export class RouteConfig {
  init(app: Application) {
    app.use('/auth', new AuthRouter().addRoot());
    app.use('/api/users', new UserRouter().addRoot());
    app.use('/api/search-histories', new UserSearchHistoryRouter().addRoot());
    app.use('/api/categories', new CategoryRouter().addRoot());
    app.use('/api/user-categories', new UserCategoryRouter().addRoot());
  }
}
