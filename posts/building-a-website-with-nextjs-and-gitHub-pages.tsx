import { author } from "@/data/authorData";
import { BlogPostMetadata } from "@/types/blogPostMetadata";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';



const metadata: BlogPostMetadata = {
  slug: "building-a-website-with-nextjs-and-gitHub-pages",
  mainImage: "/images/blog/blog-01.png",
  title: "Building a website with Next.js and GitHub Pages",
  description: "Walkthrough the process of building a website with a Next.js template, deploying it on GitHub Pages, and connecting it to a custom domain using Cloudflare. The guide covers everything from setting up the project to configuring DNS records for the custom domain, making it easy to get the site up and running.",
  author: author,
  publishedAt: "April 8, 2025",
  tags: ["Deploy", "Website", "DNS"],
};

const markdown = `

You know those moments when you think *“I should really have a website”*... and then a couple of weeks later you’re messing with a new framework, deep into DNS configs and reading GitHub docs at 2AM?

Yep. That was me.

This post is a walk-through of how I took a Next.js template (because of course I wasn’t going to build everything from scratch), hosted it on GitHub Pages (free is good), and sprinkled in some Cloudflare magic to hook it all up to my custom domain.

**Spoiler alert**: it works! And hopefully, after reading this, yours will too.

### Kicking Off the Frontend

The first step was getting the website up and running locally. Sure, I *could* have written raw HTML from scratch, but let’s be honest, that’s not how I wanted to spend my weekend. Instead, I decided to try out **Next.js**.

I *could* have also spent hours watching tutorials and building everything from the ground up… but I went with the smarter (read: lazier) route and grabbed a nice pre-built template to speed things up. 

There are tons of sites out there with Next.js templates. I just picked one that looked good and started breaking it. Luckily, I ended up with a well-structured template packed with polished components, even with some fancy animations and transitions. If you’re someone who appreciates clean code (like I do), that kind of thing is a pleasant surprise. And if you’re not that lucky? No worries, you can always refactor everything.

Once you’ve customized your site and you’re happy with it, you’ll need to add a \`next.config.js\` file to your project root. It should look like this:

\`\`\`jsx
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
\`\`\`

Now, make sure the site is exportable. Run \`next build\` to build the project, then serve it statically with \`npx serve out\`. If everything works as expected, you're good to go, and right on track to deploy it and finally show your masterpiece to the world.

### Going Live with GitHub Pages

After spending some time exploring web hosting options, I realized GitHub Pages checked all the boxes (*read: free hosting*). The only real catch? Your repo has to be public. But hey, lucky me, I've got nothing to hide, you're not here to steal my blog posts, right?

First of all, you need a GitHub repo with your Next.js project in it (make sure it is public or pay for it). Then, head over to your repo settings and enable GitHub Pages (Settings → Code and Automation → Pages).

Naturally, I used **GitHub Actions** to handle the deployment because there's no way I'm committing the build folder manually. I just grabbed the suggested workflow to deploy a static site, and… it worked on the first try. No bugs, no rage Googling. Honestly, it was a little disappointing.

Once you trigger a deploy, your site should be live within seconds. You might notice your assets aren't loading correctly, that's probably due to the site path being off. I didn't bother fixing it right away, because the next step magically solves it.

### Give Your Site a Proper Name

There's nothing quite like having your own domain name, it makes things feel *official*. So, a few weeks ago I bought one (that's why I built a site, not the opposite).

I went with Cloudflare, not for any particular reason, just felt like a good choice at the time, and I've been pretty happy with it. That said, you can use pretty much any domain registrar you like, I believe they all do the job.

Once you've got your shiny new domain, you'll need to add some DNS records to **connect it to GitHub Pages**:

- **1 TXT** record so GitHub can make sure you actually own the domain and didn't just find it on the internet somewhere. You'll find the challenge key for this in your repo's **Pages** settings.
- **4 A** records pointing to GitHub's servers. You might not technically need all four, but GitHub recommends it, so let's just make them happy.
- **1 CNAME** record to handle the famous \`www.\` subdomain, in case someone insists on typing it.

Follow the table below to get it all set up.

| Type | Name | Content |
| --- | --- | --- |
| TXT | _github-pages-challenge-\<repo\> | “\<challenge-key\>” |
| A | \<domain\> | 185.199.111.153 |
| A | \<domain\> | 185.199.110.153 |
| A | \<domain\> | 185.199.109.153 |
| A | \<domain\> | 185.199.108.153 |
| CNAME | www | \<domain\> |

Now, you head back to your repo's **Pages** settings and enter your custom domain. If GitHub can verify your DNS, then you are ready to go and share your shiny new domain with the world. Otherwise, it may be time to call a professional.

`;

export const Post = () => {

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {markdown}
    </ReactMarkdown>
  );
}

export default metadata;
