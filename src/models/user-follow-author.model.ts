import { Document, Schema, model } from "mongoose";
import { IUserFollowAuthor } from "../interfaces/user-follow-author/user-follow-author.interface";

export interface IUserFollowAuthorModel extends IUserFollowAuthor, Document { }

const UserFollowAuthorSchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
        author: { type: Schema.Types.ObjectId, required: true, ref: 'author' },
    }, {
    timestamps: true,
    versionKey: false,
}
);

const UserFollowAuthorModel = model<IUserFollowAuthorModel>('user_follow_author', UserFollowAuthorSchema);
export default UserFollowAuthorModel;