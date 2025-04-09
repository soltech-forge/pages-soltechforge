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
  description?: string;
  author?: Author;
  publishedAt?: string;  
  tags?: string[];
};
