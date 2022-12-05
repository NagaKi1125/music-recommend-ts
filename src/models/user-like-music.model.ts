import { Document, Schema, model } from 'mongoose';
import { IUserLikeMusic } from '../interfaces/user-like-music/user-like-music.interface';
export interface IUserLikeMusicModel extends IUserLikeMusic, Document { }

const UserLikeMusicSchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
        music: { type: Schema.Types.Boolean, required: true, ref: 'music' }
    }, {
    timestamps: true,
    versionKey: false,
}
);

const UserLikeMusicModel = model<IUserLikeMusicModel>('user_like_music', UserLikeMusicSchema);
export default UserLikeMusicModel;