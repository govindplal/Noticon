import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  pages: IPage['_id'][];
}

interface IPage extends Document {
  title: string;
  owner: IUser['_id'];
  parent: IPage['_id'] | null;
  subpages: IPage['_id'][];
  content: string;
  coverImage:  string;
  icon:        string;
  isPublished: boolean;
}


const UserSchema = new Schema<IUser>({
  username: String,
  email: String,
  pages: [{ type: Schema.Types.ObjectId, ref: 'Page' }],
});

const PageSchema = new Schema<IPage>({
  title: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  parent: { type: Schema.Types.ObjectId, ref: 'Page', default: null },
  subpages: [{ type: Schema.Types.ObjectId, ref: 'Page' }],
  content: String,
  coverImage:  String,
  icon:        String,
  isPublished: Boolean,
});




const User = mongoose.model<IUser>('User', UserSchema);
const Page = mongoose.model<IPage>('Page', PageSchema);

export { User, Page};





