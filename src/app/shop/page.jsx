import ShopCard from "./Components/ShopCard/ShopCard";

const Shop = async () => {
  const res = await fetch("http://localhost:3000/api/shop");
  let productData = await res.json();

    if (productData && !Array.isArray(productData)) {
    productData = [productData];
  }

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {productData?.map((item, idx) => (
          <ShopCard key={idx} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
