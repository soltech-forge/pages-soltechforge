import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Dive into insights, experiences, and architectural deep dives from the world of software engineering. Explore articles on innovative solutions, best practices, and lessons learned from real-world projects.`,
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        {BlogData.length === 0 
        ? <p className="text-center text-lg text-gray-500">There are no articles yet!</p>
        : <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.slice(0, 3).map((blog, key) => (
              <BlogItem blog={blog} key={key} />
            ))}
          </div>}
      </div>
    </section>
  );
};

export default Blog;
