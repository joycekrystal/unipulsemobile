import { type DBFields } from "./common.type";

export type Announcement = {
  headline: string;
  body: string;
  image?: string;
  isPublished: boolean;
} & DBFields;

export type Event = {} & DBFields;
