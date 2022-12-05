import { Document, Schema, model } from 'mongoose';
import { ICategory } from '../interfaces/category/category.interface';
export interface ICategoryModel extends ICategory, Document { }

const CategorySchema: Schema = new Schema({
    category: { type: String, required: true }
},
    {
        timestamps: true,
        versionKey: false
    }
);

const CategoryModel = model<ICategoryModel>('category', CategorySchema);

export default CategoryModel;