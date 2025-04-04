import { Blog, Author } from "@/types/blog";

const author: Author = {
  name: "Henrique Nunes",
  image: "/images/blog/author.png",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  _id: 1,
};

const BlogData: Blog[] = [
  {
    _id: 1,
    slug: "free-advertising-for-your-online-business",
    mainImage: "/images/blog/blog-01.png",
    title: "Free advertising for your online business",
    metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    author: author,
    publishedAt: "July 30, 2023",
    tags: ["Events"],
  },
];

export default BlogData;
