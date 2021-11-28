import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  /**
   * Username
   */
  @Prop({ require: true, unique: true, type: String })
  username: string;

  /**
   * Password
   */
  @Prop({ require: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
