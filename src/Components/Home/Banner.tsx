import Image from "next/image";
import Link from "next/link";
import BannerImg from "@/app/assets/Banner.png";

const Banner = (): React.JSX.Element => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[400px] sm:h-[480px] lg:h-[580px] w-full py-10">
        <Image
          src={BannerImg}
          alt="BurmudaShop Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Light Yellow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E8]/70 via-[#FFF8E8]/20 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
            <div className="max-w-lg">

              {/* Badge */}
              <span className="mb-4 inline-flex items-center rounded-full bg-orange-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                🔥 Limited Time Offer
              </span>

              {/* Heading */}
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Discover Your
                <br />
                Favorite Products
                <br />
                at <span className="text-orange-500">Best Prices</span>
              </h1>

              {/* Description */}
              <p className="mb-7 max-w-md text-sm leading-7 text-gray-700 sm:text-base">
                Shop premium electronics, fashion, groceries and home
                essentials with secure payments, fast delivery and exclusive
                daily discounts only at BurmudaShop.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Shop Now
                </Link>

                <Link
                  href="/shop"
                  className="rounded-lg border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
                >
                  Explore
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Animated Discount */}
        <div className="absolute right-5 top-5 sm:right-8 sm:top-8 lg:right-14 lg:top-14">
          <div className="animate-zoom flex h-24 w-24 flex-col items-center justify-center rounded-full bg-orange-500 text-white shadow-2xl sm:h-32 sm:w-32 lg:h-40 lg:w-40">

            <p className="text-[10px] uppercase tracking-widest sm:text-xs">
              Save Up To
            </p>

            <h2 className="text-3xl font-black sm:text-5xl lg:text-6xl">
              50%
            </h2>

            <p className="text-xs font-semibold sm:text-sm">
              OFF
            </p>

          </div>
        </div>

     
      </div>
    </section>
  );
};

export default Banner;