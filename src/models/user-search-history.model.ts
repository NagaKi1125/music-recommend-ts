import { Document, Schema, model } from 'mongoose';
import { IUserSearchHistory } from '../interfaces/user-search-history/user-search-history.interface';
export interface IUserSearchHistoryModel extends IUserSearchHistory, Document { }

const UserSearchHistorySchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
        content: { type: String, required: false }

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserSearchHistoryModel = model<IUserSearchHistoryModel>('user_search_history', UserSearchHistorySchema);

export default UserSearchHistoryModel;
