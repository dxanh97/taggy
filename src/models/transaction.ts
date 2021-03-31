import { Tag } from './tag';

export interface Transaction {
  id: string;
  amount: number;
  note?: string;
  time: Date;
  tags: Array<Tag['id']>;
}
