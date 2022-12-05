import { Document, Schema, model } from 'mongoose';
import { type } from 'os';
import { IUserCategory } from '../interfaces/user-category/user-category.interface';

export interface IUserCategoryModel extends IUserCategory, Document { }

const UserCategorySchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    category: { type: Schema.Types.ObjectId, required: true, ref: 'category' }
},
    {
        timestamps: true,
        versionKey: false,
    });

const UserCategoryModel = model<IUserCategoryModel>('user_category', UserCategorySchema);
export default UserCategoryModel;