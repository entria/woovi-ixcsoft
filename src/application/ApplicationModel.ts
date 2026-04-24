import mongoose, { Schema, type Document, type Types } from 'mongoose';

export type IxcsoftConfig = {
  baseUrl: string;
  token: string;
};

export type IApplication = {
  _id: Types.ObjectId;
  type: string;
  isActive: boolean;
  wooviAppId: string;
  ixcsoft: IxcsoftConfig;
  removedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
} & Document;

const IxcsoftConfigSchema = new Schema<IxcsoftConfig>(
  {
    baseUrl: { type: String, required: true },
    token: { type: String, required: true },
  },
  { _id: false },
);

const ApplicationSchema = new Schema<IApplication>(
  {
    type: { type: String, required: true, index: true },
    isActive: { type: Boolean, required: true, default: true, index: true },
    wooviAppId: { type: String, required: true, unique: true, index: true },
    ixcsoft: { type: IxcsoftConfigSchema, required: true },
    removedAt: { type: Date, default: null },
  },
  { timestamps: true, collection: 'applications' },
);

export const ApplicationModel = mongoose.model<IApplication>('Application', ApplicationSchema);
