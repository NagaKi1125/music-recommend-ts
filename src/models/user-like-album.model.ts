import { Document, Schema, model } from 'mongoose';
import { IUserLikeAlbum } from '../interfaces/user-like-album/user-like-album.interface';
export interface IUserLikeAlbumModel extends IUserLikeAlbum, Document { }

const UserLikeAlbumSchema: Schema = new Schema(
    {
        album: { type: Schema.Types.ObjectId, required: true, ref: 'album' },
        user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    }, {
    timestamps: true,
    versionKey: false,
}
);

const UserLikeAlbumModel = model<IUserLikeAlbumModel>('user-like-album', UserLikeAlbumSchema);
export default UserLikeAlbumModel;