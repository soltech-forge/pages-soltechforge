export type Author = {
  _id?: number | string;
  name: string;
  image: string;
  bio?: string;
};

export type BlogPostMetadata = {
  slug?: any;
  mainImage?: any;
  title: string;
  metadata?: string;
  author?: Author;
  publishedAt?: string;  
  tags?: string[];
};
