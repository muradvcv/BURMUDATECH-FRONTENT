"use client";

import React from "react";
import Link from "next/link";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Lottie from "lottie-react";
import secureAnimation from "@/app/assets/lottie/login.json";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordValue, setPasswordValue] = React.useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log(data);
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Container Card */}
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

        {/* Left Side: Info & Features Banner (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-col items-center justify-between w-[440px] bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 p-12 text-white relative overflow-hidden shrink-0">
          {/* Decorative Blur Backgrounds */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          {/* Lottie Animation */}
          <div className="relative z-10 w-full flex justify-center">
            <Lottie
              animationData={secureAnimation}
              loop
              className="w-[280px] h-[280px] object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center my-auto">
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
              Shop With <br /> Confidence
            </h2>
            <p className="mt-4 text-orange-50 text-sm leading-relaxed">
              Create your BurmudaShop account and enjoy a secure, faster and smarter shopping experience with exclusive offers.
            </p>
          </div>

          {/* Features Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-3 w-full mt-auto">
            {[
              { icon: "🔒", text: "Secure Account" },
              { icon: "⚡", text: "Fast Checkout" },
              { icon: "❤️", text: "Wishlist" },
              { icon: "📦", text: "Order Tracking" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center border border-white/10">
                <span className="text-xl">{item.icon}</span>
                <p className="mt-1 text-xs font-medium text-orange-50">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form Component */}
        <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-white">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Create Your Account
            </h1>
            <p className="text-slate-500 mt-2 text-sm">
              Join <span className="text-orange-600 font-semibold">BurmudaShop</span> and start shopping smart.
            </p>
          </div>

          <Form
            onSubmit={onSubmit}
            className="space-y-5 w-full"
            render={(props) => <form {...props} />}
          >
            {/* Input Fields */}
            <div className="space-y-5">
              {/* Email Field */}
              <TextField
                isRequired
                name="email"
                type="email"
                className="flex flex-col gap-1.5"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Email Address</Label>
                <Input
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition text-sm text-slate-800 placeholder:text-slate-400"
                />
                <FieldError className="text-xs text-rose-500 mt-1" />
              </TextField>

              {/* Password Field */}
              <TextField
                isRequired
                name="password"
                type={showPassword ? "text" : "password"}
                className="flex flex-col gap-1.5 relative"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Minimum 8 characters required";
                  }
                  return null;
                }}
              >
                <Label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Password</Label>
                <div className="relative">
                  <Input
                    placeholder="••••••••"
                    onChange={(e) => setPasswordValue((e.target as HTMLInputElement).value)}
                    className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition text-sm text-slate-800 placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <FieldError className="text-xs text-rose-500 mt-1" />
              </TextField>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 mt-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-lg shadow-orange-600/15 active:scale-[0.98] transition duration-200"
            >
              Create Account
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 border-t border-slate-100"></div>
              <span className="text-slate-400 text-[10px] font-bold tracking-widest">OR</span>
              <div className="flex-1 border-t border-slate-100"></div>
            </div>

            {/* Social Authentication Button */}
            <Button
              className="h-12 border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] transition font-medium text-slate-700 rounded-xl gap-3 w-full shadow-sm"
            >
              <Image
                width={20}
                height={20}
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign up with Google
            </Button>

            {/* Footer Navigation */}
            <p className="text-center text-sm text-slate-500 pt-4">
              Do not have an account?{" "}
              <Link
                href="/auth/register"
                className="text-orange-600 font-semibold hover:text-orange-700 hover:underline transition ml-1"
              >
                Sign Up
              </Link>
            </p>
          </Form>
        </div>

      </div>
    </section>
  );
};

export default LoginPage;