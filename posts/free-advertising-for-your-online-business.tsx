import { author } from "@/data/authorData";
import { BlogPostMetadata } from "@/types/blogPostMetadata";
import Image from "next/image";

const metadata: BlogPostMetadata = {
  slug: "free-advertising-for-your-online-business",
  mainImage: "/images/blog/blog-01.png",
  title: "Free advertising for your online business",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  author: author,
  publishedAt: "July 30, 2023",
  tags: ["Events"],
};

export default metadata;


export const Post = () => {
  // "use server"; // mark function as a server action (fixes the error)

  return (
    <div className="blog-details">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh
        lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus
        quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet
        in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra,
        tempus quam non, interdum ipsum.
      </p>

      <p>
        Aenean augue ex, condimentum vel metus vitae, aliquam porta elit.
        Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam
        interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar
        placerat. Nulla fringilla elit sit amet justo feugiat sodales. Morbi
        eleifend, enim non eleifend laoreet, odio libero lobortis lectus, non
        porttitor sem urna sit amet metus. In sollicitudin quam est,
        pellentesque consectetur felis fermentum vitae.
      </p>

      <div className="mb-10 flex flex-wrap justify-around">
        <Image
          src={"/images/blog/blog-01.png"}
          width={350}
          height={200}
          alt="image"
        />
        <Image
          src={"/images/blog/blog-02.png"}
          width={350}
          height={200}
          alt="image"
        />
      </div>

      <h3 className="pt-8">Nunc elementum elit viverra, tempus quam non</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh
        lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus
        quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet
        in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra,
        tempus quam non, interdum ipsum.
      </p>
    </div>
  );
};
