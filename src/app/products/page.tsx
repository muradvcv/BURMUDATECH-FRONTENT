import Image from "next/image";
import { getAllProducts, Product } from "@/lib/apis/products";

const AllProducts = async () => {
  const products: Product[] = await getAllProducts();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-600">
          Our Products
        </h2>
        <p className="text-gray-500 mt-2">
          Explore our latest premium collection.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="flex items-center justify-center h-60">
          <p className="text-lg text-gray-500">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: Product) => (
            <div
              key={product._id}
              className="group overflow-hidden rounded-2xl bg-white border border-orange-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:768px) 100vw,
                         (max-width:1024px) 50vw,
                         33vw"
                />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                  {product.title}
                </h3>


                <div className="mt-4 flex items-center justify-between gap-8">
                  <span className="text-2xl font-bold text-orange-600">
                    ${product.price}
                  </span>

                  <button className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllProducts;