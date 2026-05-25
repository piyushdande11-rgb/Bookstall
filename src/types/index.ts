export interface ArticleMeta {
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  coverImage?: string;
  tags?: string[];
}

export interface EventMeta {
  title: string;
  date: string;
  location: string;
  description: string;
  coverImage?: string;
}

export interface ContentItem<T> {
  slug: string;
  meta: T;
  content: string;
}