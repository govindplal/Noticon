import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  pages: IPage['_id'][];
  boards: IBoard['_id'][];
}

interface IPage extends Document {
  title: string;
  owner: IUser['_id'];
  blocks: IBlock['_id'][];
  parent: IPage['_id'] | null;
  subpages: IPage['_id'][];
}

interface IBlock extends Document {
  type: string;
  content: any;
  parent: IPage['_id'];
}

interface IBoard extends Document {
  title: string;
  owner: IUser['_id'];
  lists: IList['_id'][];
}

interface IList extends Document {
  title: string;
  board: IBoard['_id'];
  cards: ICard['_id'][];
}

interface ICard extends Document {
  title: string;
  description: string;
  list: IList['_id'];
}

const UserSchema = new Schema<IUser>({
  username: String,
  email: String,
  password: String,
  pages: [{ type: Schema.Types.ObjectId, ref: 'Page' }],
  boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }]
});

const PageSchema = new Schema<IPage>({
  title: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  blocks: [{ type: Schema.Types.ObjectId, ref: 'Block' }],
  parent: { type: Schema.Types.ObjectId, ref: 'Page', default: null },
  subpages: [{ type: Schema.Types.ObjectId, ref: 'Page' }]
});

const BlockSchema = new Schema<IBlock>({
  type: String,
  content: Schema.Types.Mixed,
  parent: { type: Schema.Types.ObjectId, ref: 'Page' }
});

const BoardSchema = new Schema<IBoard>({
  title: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  lists: [{ type: Schema.Types.ObjectId, ref: 'List' }]
});

const ListSchema = new Schema<IList>({
  title: String,
  board: { type: Schema.Types.ObjectId, ref: 'Board' },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
});

const CardSchema = new Schema<ICard>({
  title: String,
  description: String,
  list: { type: Schema.Types.ObjectId, ref: 'List' }
});

const User = mongoose.model<IUser>('User', UserSchema);
const Page = mongoose.model<IPage>('Page', PageSchema);
const Block = mongoose.model<IBlock>('Block', BlockSchema);
const Board = mongoose.model<IBoard>('Board', BoardSchema);
const List = mongoose.model<IList>('List', ListSchema);
const Card = mongoose.model<ICard>('Card', CardSchema);

export { User, Page, Block, Board, List, Card };
