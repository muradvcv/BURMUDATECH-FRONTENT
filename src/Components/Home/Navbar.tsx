"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/app/icon.png"

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Explore Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const Navbar = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold rounded-full">
          <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo"/>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-gray-700 transition hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            type="button"
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <Search size={21} />
          </button>

          <Link
            href="/auth/login"
            className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-semibold transition hover:border-orange-500 hover:text-orange-500"
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Register
          </Link>
        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-2 lg:hidden">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <Search size={20} />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
      >
        <div className="border-t bg-white px-6 py-5">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 transition hover:text-orange-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/auth/login"
              className="rounded-lg border border-gray-300 py-2 text-center font-semibold transition hover:border-orange-500 hover:text-orange-500"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="rounded-lg bg-orange-500 py-2 text-center font-semibold text-white transition hover:bg-orange-600"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;