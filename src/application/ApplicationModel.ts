import mongoose, { Schema, type Document, type Types } from 'mongoose';

export type IApplication = {
  _id: Types.ObjectId;
  type: string;
  isActive: boolean;
  company: Types.ObjectId;
  metadata?: Record<string, unknown>;
  removedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
} & Document;

const ApplicationSchema = new Schema<IApplication>(
  {
    type: { type: String, required: true, index: true },
    isActive: { type: Boolean, required: true, default: true, index: true },
    company: { type: Schema.Types.ObjectId, required: true, index: true },
    metadata: { type: Schema.Types.Mixed },
    removedAt: { type: Date, default: null },
  },
  { timestamps: true, collection: 'applications' },
);

export const ApplicationModel = mongoose.model<IApplication>('Application', ApplicationSchema);
