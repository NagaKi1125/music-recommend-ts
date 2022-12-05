import { Document, Schema, model } from 'mongoose';
import { IListenCount } from '../interfaces/listen-count/listen-count.interface';

export interface IListenCountModel extends IListenCount, Document { }

const ListenCountSchema: Schema = new Schema(
    {
        music: { type: Schema.Types.ObjectId, required: true, ref: 'music' },
        user: { type: Schema.Types.ObjectId, required: true, ref: 'user' }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ListenCountModel = model<IListenCountModel>('listen_count', ListenCountSchema);
export default ListenCountModel;