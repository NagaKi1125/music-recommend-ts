import { Document, Schema, model } from 'mongoose';
import { IComment } from '../interfaces/comment/comment.interface';
export interface ICommentModel extends IComment, Document { }

const CommentSchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
        music: { type: Schema.Types.Boolean, required: true, ref: 'music' },
        comment: { type: String, required: true, trim: true }
    }, {
    timestamps: true,
    versionKey: false,
}
);

const CommentModel = model<ICommentModel>('comment', CommentSchema);
export default CommentModel;