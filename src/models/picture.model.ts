import { Document, Schema, model } from 'mongoose';
import { PICTURE_TYPE } from '../common/constants';
import { IPicture } from '../interfaces/picture/picture.interface';

export interface IPictureModel extends IPicture, Document { }

const PictureSchema: Schema = new Schema({
    type: { type: PICTURE_TYPE, required: true },
    url: { type: String, required: true }
},
    {
        timestamps: true,
        versionKey: false,
    });

const PictureModel = model<IPictureModel>('picture', PictureSchema);
export default PictureModel;