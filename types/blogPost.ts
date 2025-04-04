import { BlogPostMetadata } from "@/types/blogPostMetadata";
import { FC } from "react";

export type BlogPost = {
	metadata: BlogPostMetadata,
	Component: FC;
};
