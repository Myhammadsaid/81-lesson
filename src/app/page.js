import Hero from "@/components/hero/Hero";
import Product from "@/components/product/Product";
import Category from "@/components/category/Category";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=3");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  let data = await getData();

  return (
    <main>
      <Hero />
      <Product data={data?.products} />
      <Category />
    </main>
  );
};

export default Home;
