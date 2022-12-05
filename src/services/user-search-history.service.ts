import { FilterQuery, Model } from 'mongoose';
import { IUserSearchHistory } from '../interfaces/user-search-history/user-search-history.interface';
import { UserAuth } from '../interfaces/user/user-auth.interface';
import UserSearchHistoryModel, { IUserSearchHistoryModel } from "../models/user-search-history.model";

class UserSearchHistoryService {
    private userSearchHistoryModel: Model<IUserSearchHistoryModel> = UserSearchHistoryModel;

    async getAll() {
        return this.userSearchHistoryModel.find();
    }

    async create(data: IUserSearchHistory, user: UserAuth) {
        data.userId = user.uid;
        const newSearchHistory = new this.userSearchHistoryModel(data);
        return newSearchHistory.save();
    }

    async deleteById(id: string) {
        const userSearchHistory = await this.userSearchHistoryModel.findByIdAndDelete(id);
        if (!userSearchHistory) throw new Error('Cannot delete history');
        return userSearchHistory;
    }
}

export default new UserSearchHistoryService();