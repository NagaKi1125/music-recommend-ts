import { Document, Schema, model } from 'mongoose';
import { IAlbum } from '../interfaces/album/album.interface';
export interface IAlbumModel extends IAlbum, Document { }

const AlbumSchema: Schema = new Schema(
    {
        albumName: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, required: true, ref: 'author' },
        music: { type: Schema.Types.Boolean, required: true, ref: 'music' }
    }, {
    timestamps: true,
    versionKey: false,
}
);

const AlbumModel = model<IAlbumModel>('album', AlbumSchema);
export default AlbumModel;