"use client";

import React from "react";
import Image from "next/image";
import "./Product.css";

const Product = ({ data }) => {
  let products = data?.map((val) => (
    <div className="product-card" key={val.id}>
      <Image src={val.images[0]} width={200} height={200} alt={val.title} />
      <p className="product-card-title">By John Doe l Aug 23, 2021</p>
      <h2 className="product-text">{val.title}</h2>
      <p className="product-par">{val.description}</p>
    </div>
  ));

  return (
    <div>
      <section className="product">
        <div className="container">
          <h1 className="product-title">Popular blogs</h1>
          <div className="product-cards">{products}</div>
          <hr />
        </div>
      </section>
    </div>
  );
};

export default Product;
