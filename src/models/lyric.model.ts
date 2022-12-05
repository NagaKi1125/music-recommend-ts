import { Document, Schema, model } from 'mongoose';
import { ILyric } from '../interfaces/lyric/lyric.interface';

export interface ILyricModel extends ILyric, Document { }

const LyricSchema: Schema = new Schema({
    music: { type: Schema.Types.ObjectId, required: true, ref: 'music' },
    lyric: { type: String, required: true },
},
    {
        timestamps: true,
        versionKey: false,
    });

const LyricModel = model<ILyricModel>('lyric', LyricSchema);
export default LyricModel;