"use client";

import React from "react";
import FastMarquee from "react-fast-marquee";
import {
  BadgePercent,
  ShieldCheck,
  Truck,
  CreditCard,
  RefreshCw,
  Headphones,
  Star,
} from "lucide-react";

const Marquee = (): React.JSX.Element => {
  return (
    <section className="border-y border-orange-100 bg-gradient-to-r from-orange-50 via-white to-orange-50 py-4">
      <FastMarquee
        speed={45}
        pauseOnHover
        gradient={false}
      >
        <div className="mx-10 flex items-center gap-2 text-gray-700">
          <Truck className="text-orange-500" size={20} />
          <span className="font-medium">
            Free Shipping on Orders Over $99
          </span>
        </div>

        <div className="mx-10 flex items-center gap-2 text-gray-700">
          <BadgePercent className="text-orange-500" size={20} />
          <span className="font-medium">
            Up To 50% OFF Limited Time Offer
          </span>
        </div>

        <div className="mx-10 flex items-center gap-2 text-gray-700">
          <ShieldCheck className="text-orange-500" size={20} />
          <span className="font-medium">
            100% Secure Payment
          </span>
        </div>

        <div className="mx-10 flex items-center gap-2 text-gray-700">
          <CreditCard className="text-orange-500" size={20} />
          <span className="font-medium">
            Multiple Payment Methods
          </span>
        </div>

        <div className="mx-10 flex items-center gap-2 text-gray-700">
          <RefreshCw className="text-orange-500" size={20} />
          <span className="font-medium">
            Easy 30 Days Return Policy
          </span>
        </div>

        <div className="mx-10 flex items-center gap-2 text-gray-700">
          <Headphones className="text-orange-500" size={20} />
          <span className="font-medium">
            24/7 Customer Support
          </span>
        </div>

        <div className="mx-10 flex items-center gap-2 text-gray-700">
          <Star className="text-orange-500" size={20} />
          <span className="font-medium">
            Trusted By 10,000+ Happy Customers
          </span>
        </div>
      </FastMarquee>
    </section>
  );
};

export default Marquee;