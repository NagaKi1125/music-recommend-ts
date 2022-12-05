import { Model } from "mongoose";
import { ICategory } from "../interfaces/category/category.interface";
import { IUserCategory } from "../interfaces/user-category/user-category.interface";
import { UserAuth } from "../interfaces/user/user-auth.interface";
import UserCategoryModel, { IUserCategoryModel } from "../models/user-category.model";

class UserCategoryService {
    private userCategoryModel: Model<IUserCategoryModel> = UserCategoryModel;

    async getAllUserLikedCategory(user?: UserAuth) {
        const category = this.userCategoryModel.find({ userId: user!.uid }).populate('category', 'category _id');
        return category;
    }

    async likeCategory(categoryId?: String, user?: UserAuth) {
        return this.userCategoryModel.create({
            userId: user!.uid,
            category: categoryId
        });

    }

    async unlikeCategory(id: String) {
        const userCategory = this.userCategoryModel.findByIdAndDelete(id);
        if (!userCategory) throw new Error('Cannot delete');
        return userCategory;
    }

    async getUserLikeCategories(id: String) {
        const userCategory = await this.userCategoryModel
            .findById(id).populate('category');
        console.log(userCategory);
        return userCategory;
    }

}

export default new UserCategoryService();