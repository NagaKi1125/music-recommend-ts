import { Document, Schema, model } from 'mongoose';
import { IListenHistory } from '../interfaces/listen-history/listen-history.interface';
export interface IListenHistoryModel extends IListenHistory, Document { }

const ListenHistorySchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
        music: { type: Schema.Types.Boolean, required: true, ref: 'music' }
    }, {
    timestamps: true,
    versionKey: false,
}
);

const ListenHistoryModel = model<IListenHistoryModel>('listen_history', ListenHistorySchema);
export default ListenHistoryModel;