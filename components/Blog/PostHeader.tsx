import Image from "next/image";

const PostHeader = ({ post }) => {
  return (
    <>
      <div className="mb-10 w-full overflow-hidden ">
        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </div>

      <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
        {post.title}
      </h2>

      <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
        <li>
          <span className="text-black dark:text-white">Author: </span>{" "}
          {post.author?.name}
        </li>
        <li>
          <span className="text-black dark:text-white">Published On: </span>{" "}
          {post.publishedAt}
        </li>
        <li>
          {post.tags?.map((tag: string, index: number) => (
            <span
              key={index}
              className="rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-white"
            >
              {tag}
            </span>
          ))}
        </li>
      </ul>
    </>
  );
};

export default PostHeader;
