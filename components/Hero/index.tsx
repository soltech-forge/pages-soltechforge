"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="relative">
        <div className="absolute top-[60px] right-0 h-[1000px] w-[1000px] hidden md:block">
            <Image
              src="/images/hero/hero-light.svg"
              alt="Hero"
              objectFit="cover"
              className="dark:hidden"
              height={1000}
              width={1000}
            />
            <Image
              src="/images/hero/hero-dark.svg"
              alt="Hero"
              objectFit="cover"
              className="hidden dark:block"
              height={1000}
              width={1000}
            />
        </div>
        <div className="mx-auto max-w-c-1390 flex pt-[100px] md:pt-[300px] md:pb-[200px]">
          <div>
            <div className="relative z-10 mx-auto text-center md:text-left px-4">
              <h1 className="font-bold text-gray-900 dark:text-white leading-tight">
                <span className="text-black dark:text-white block text-2xl md:text-6xl pb-1 md:pb-4">Building Software for People</span>
                <span className="text-primary block text-lg md:text-5xl pb-1 md:pb-4">Sharing Knowledge for Developers</span>
              </h1>
              <p className="mt-4 text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl py-4">
                At Soltech Forge, we craft innovative apps that make life easier and
                share insights to empower developers. Explore our products and blog to
                see how we contribute to both communities.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-8">
                <Link href="#products">
                <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-md">
                  Explore our Products
                </button>
                </Link>
                <Link href="/blog">
                <button className="px-6 py-3 bg-primary text-white rounded-full shadow-md">
                  Read the Blog
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
