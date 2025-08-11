import SearchSortBar from "./Components/SearchSortBar/SearchSortBar";
import ShopCard from "./Components/ShopCard/ShopCard";

const Shop = async ({ searchParams }) => {
  const search = searchParams?.search || "";

  // Call API with search query
  const res = await fetch(`http://localhost:3000/api/shop?search=${search}`, {
    cache: "no-store",
  });
  let productData = await res.json();

  if (productData && !Array.isArray(productData)) {
    productData = [productData];
  }



  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
      <SearchSortBar />

      {productData?.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">No products found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
          {productData?.map((item, idx) => (
            <ShopCard key={idx} product={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Shop;
