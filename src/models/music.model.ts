import { Document, Schema, model } from 'mongoose';
import { IMusic } from '../interfaces/music/music.interface';

export interface IMusicModel extends IMusic, Document { }

const MusicSchema: Schema = new Schema({
    url: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, required: true, ref: 'category' },
    dateRelease: { type: Date, required: false },
    author: { type: Schema.Types.ObjectId, required: true, ref: 'author' },
    thumbnail: { type: Schema.Types.ObjectId, required: true }
},
    {
        timestamps: true,
        versionKey: false,
    });

const MusicModel = model<IMusicModel>('music', MusicSchema);
export default MusicModel;