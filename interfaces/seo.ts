export type MetaDefinition = {
  charset?: string;
  content?: string;
  httpEquiv?: string;
  id?: string;
  itemProp?: string;
  name?: string;
  property?: string;
  scheme?: string;
  url?: string;
} & {
  [prop: string]: string;
};

export enum MetaTags {
  description = 'description',
  image = 'image',
  keywords = 'keywords'
}

export interface SeoConfig {
  title: string;
  rewriteTitle?: boolean;
  meta?: {
    [MetaTags.description]?: string;
    [MetaTags.image]?: string;
    [MetaTags.keywords]?: string;
  };
}
