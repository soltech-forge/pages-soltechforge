export type Author = {
  _id?: number | string;
  name: string;
  image: string;
  bio?: string;
};

export type Blog = {
  _id: number;
  slug?: any;
  mainImage?: any;
  title: string;
  metadata?: string;
  author?: Author;
  publishedAt?: string;  
  tags?: string[];
};
