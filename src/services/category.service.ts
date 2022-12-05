import { date } from 'joi';
import { FilterQuery, Model } from 'mongoose';
import { ICategory } from '../interfaces/category/category.interface';
import { UserAuth } from '../interfaces/user/user-auth.interface';
import CategoryModel, { ICategoryModel } from '../models/category.model';

class CategoryService {
    private categoryModel: Model<ICategoryModel> = CategoryModel;

    async getAll() {
        return this.categoryModel.find();
    }

    async getById(id: string) {
        const category = await this.categoryModel.findById(id);
        if (!category) throw new Error('Cannot find category');
        return category;
    }

    async create(data: ICategory) {
        const newCategory = new this.categoryModel(data);
        return newCategory.save();
    }

    async update(id?: string, category?: string) {
        const exitingCategory = await this.categoryModel.findById(id).lean();
        if (exitingCategory) {
            return this.categoryModel.findByIdAndUpdate(id, { category, updatedAt: new Date() });
        } else {
            throw new Error('Category does not exits');
        }
    }

    async delete(id?: string) {
        const exitingCategory = await this.categoryModel.findById(id).lean();
        if (exitingCategory) {
            return this.categoryModel.findByIdAndDelete(id);
        } else {
            throw new Error('This category is no longer available');
        }
    }
}

export default new CategoryService();
