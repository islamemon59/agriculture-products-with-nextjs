import SearchSortBar from "./Components/SearchSortBar/SearchSortBar";
import ShopCard from "./Components/ShopCard/ShopCard";
import Link from "next/link";

export const metadata = {
  title: "Shop Products",
  description: "There are all shop products here",
};

const Shop = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = 12; // how many products per page

  // Call API with search & pagination query
  const res = await fetch(
    `http://localhost:3000/api/shop?search=${search}&page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const totalProducts = data.count || 0;
  const numberOfPages = Math.ceil(totalProducts / limit);
  const totalPages = [...Array(numberOfPages).keys()];

  let productData = data.products;
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
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {productData.map((item, idx) => (
              <ShopCard key={idx} product={item} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {totalPages.map((i) => (
              <Link
                key={i}
                href={{pathname: "/shop", query: { search, page: i + 1 },}}
                className={`px-4 py-2 rounded-lg border ${
                  page === i + 1
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Shop;
