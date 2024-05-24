import React from "react";
import "./ProductBusines.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=3");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProductBusines = async () => {
  let data = await getData();

  let productBusines = data?.products.map((el) => (
    <div key={el.id} className="product-busines-card">
      <Image src={el.images[0]} width={447} height={312} alt={el.title} />
      <div className="product-busines-card-content">
        <p className="product-busines-title">Business</p>
        <p className="product-busines-text">{el.title}</p>
        <p className="product-busines-par">{el.description}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <section className="product-busines">
        <div className="container">
          <form className="product-busines-form">
            <input
              type="text"
              placeholder="Searching ..."
              className="product-busines-input"
            />
          </form>
          <div className="product-busines-cards">{productBusines}</div>
        </div>
      </section>
    </div>
  );
};

export default ProductBusines;
