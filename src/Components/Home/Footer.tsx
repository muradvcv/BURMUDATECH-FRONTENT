"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/icon.png";

import { Mail, MapPin, Phone, Send } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname=usePathname()
  if(pathname.includes('/dashboard')){
    return null
  }
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="BurmudaShop Logo"
                width={60}
                height={60}
                priority
                className="bg-amber-100 rounded-xl p-1"
              />

              <h2 className="text-3xl font-bold">
                <span className="text-orange-500">Burmuda</span>Shop
              </h2>
            </Link>

            <p className="mt-5 max-w-md leading-8 text-gray-300">
              BurmudaShop is your trusted online shopping destination,
              offering premium products, secure payments, fast delivery,
              and an exceptional shopping experience.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-600 hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-black hover:text-white"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-600 hover:bg-sky-600 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 transition-colors duration-300 hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Customer Service
            </h3>

            <ul className="space-y-3">
              {[
                { name: "FAQ", href: "/faq" },
                {
                  name: "Shipping Policy",
                  href: "/shipping-policy",
                },
                {
                  name: "Return Policy",
                  href: "/return-policy",
                },
                {
                  name: "Privacy Policy",
                  href: "/privacy-policy",
                },
                {
                  name: "Terms & Conditions",
                  href: "/terms",
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 transition-colors duration-300 hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-orange-500"
                />
                <span className="text-gray-300">
                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="mt-1 text-orange-500"
                />
                <span className="text-gray-300">
                  +880 1234-567890
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="mt-1 text-orange-500"
                />
                <span className="text-gray-300">
                  support@burmudashop.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="mb-3 font-semibold text-white">
                Subscribe Newsletter
              </p>

              <div className="flex overflow-hidden rounded-lg border border-slate-700">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white px-4 py-3 text-black outline-none"
                />

                <button
                  type="button"
                  className="flex items-center justify-center bg-orange-500 px-5 text-white transition-all duration-300 hover:bg-orange-600"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-slate-700 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} BurmudaShop. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="transition-colors duration-300 hover:text-orange-500"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-orange-500"
              >
                Terms
              </Link>

              <Link
                href="/cookies"
                className="transition-colors duration-300 hover:text-orange-500"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;