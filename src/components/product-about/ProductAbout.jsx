import React from "react";
import "./ProductAbout.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=2");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProductAbout = async () => {
  let data = await getData();

  let productAbout = data?.products?.map((val) => (
    <div key={val.id} className="product-about-card">
      <div className="product-about-content">
        <h1 className="product-about-title">{val.title}</h1>
        <h3 className="product-about-text">{val.returnPolicy}</h3>
        <p className="product-about-par">{val.description}</p>
      </div>
      <Image src={val.images[0]} width={624} height={480} alt={val.title} />
    </div>
  ));
  return (
    <div>
      <section className="product-about">
        <div className="container">
          <div className="product-about-cards">{productAbout}</div>
        </div>
      </section>
    </div>
  );
};

export default ProductAbout;
