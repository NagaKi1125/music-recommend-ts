import { Document, Schema, model } from 'mongoose';
import { IAuthor } from '../interfaces/author/author.interface';

export interface IAuthorModel extends IAuthor, Document { }

const AuthorSchema: Schema = new Schema({
    name: { type: String, required: true },
    avatar: { type: Schema.Types.ObjectId, required: false, ref: 'picture' },
    description: {type: String, required: false}
}, {
    timestamps: true,
    versionKey: false,
});

const AuthorModel = model<IAuthorModel>('author', AuthorSchema);
export default AuthorModel;