"use client";
import React from "react";
import productsData from "./productsData";
import SingleProduct from "./SingleProduct";
import SectionHeader from "../Common/SectionHeader";

const Products = () => {
  return (
    <>
      <section id="products" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "PRODUCTS",
              subtitle: "Innovation for Everyday Life",
              description: `Discover a collection of unique and practical products crafted by Soltech Forge. From smart solutions to everyday essentials, explore tools designed to make life easier, more efficient, and more enjoyable.`,
            }}
          />

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-1 lg:mt-15 lg:grid-cols-2 xl:mt-20 xl:gap-12.5">
            {productsData.map((product, key) => (
              <SingleProduct product={product} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
