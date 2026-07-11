"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HiOutlineUser,

  HiOutlineLockClosed,
  HiOutlinePhone,
} from "react-icons/hi2";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center py-25">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-xl">


        {/* LEFT SIDE */}

        <div className="hidden lg:flex relative flex-col justify-between bg-[#050b14] text-white p-10 overflow-hidden">

          <div className="absolute w-80 h-80 bg-orange-500/20 rounded-full blur-3xl top-10 right-0" />

          <div>

            <h2 className="text-xl font-bold">
              🛒 <span className="text-orange-500">Burmuda</span>Shop
            </h2>


            <h1 className="mt-10 text-5xl font-bold leading-tight">
              Shop
              <span className="text-orange-500"> Smarter,</span>
              <br />
              Live
              <span className="text-orange-500"> Better</span>
            </h1>


            <p className="mt-5 text-gray-400 max-w-sm">
              Join BurmudaShop and enjoy premium products,
              secure payments and fast delivery at your doorstep.
            </p>

          </div>


          {/* Image */}

          <div className="relative h-72">

            <Image
              src="/register-banner.png"
              alt="shopping"
              fill
              className="object-contain"
            />

          </div>


          <div className="grid grid-cols-3 gap-3">

            {
              [
                "Premium Quality",
                "Secure Payment",
                "Fast Delivery"
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/10 rounded-xl p-3 text-xs"
                >
                  <p className="font-semibold">
                    {item}
                  </p>
                  <span className="text-gray-400">
                    Trusted service
                  </span>
                </div>
              ))
            }

          </div>

        </div>




        {/* RIGHT SIDE */}

        <div className="p-8 sm:p-12">


          <div className="max-w-md mx-auto">


            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                <HiOutlineUser size={28} />
              </div>


              <h2 className="mt-5 text-3xl font-bold">
                Create Your Account
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Join BurmudaShop and start your amazing shopping journey.
              </p>

            </div>



            <form className="mt-8 space-y-4">


              {/* Name + Phone */}

              <div className="grid sm:grid-cols-2 gap-3">


                <Input
                  icon={<HiOutlineUser />}
                  placeholder="Full Name"
                />


                <Input
                  icon={<HiOutlinePhone />}
                  placeholder="Phone Number"
                />


              </div>



              <Input
                icon={<HiOutlineMail />}
                placeholder="Email Address"
              />



              <div className="relative">

                <Input
                  icon={<HiOutlineLockClosed />}
                  placeholder="Password"
                  type={showPass ? "text" : "password"}
                />


                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-3.5 text-gray-400"
                >

                  {
                    showPass ?
                      <IoEyeOffOutline /> :
                      <IoEyeOutline />
                  }

                </button>


              </div>



              <Input
                icon={<HiOutlineLockClosed />}
                placeholder="Confirm Password"
                type="password"
              />



              <div className="flex items-center gap-2 text-xs text-gray-500">

                <input type="checkbox" />

                <p>
                  I agree to the
                  <span className="text-orange-500">
                    {" "}Terms of Service
                  </span>
                  {" "}and
                  <span className="text-orange-500">
                    {" "}Privacy Policy
                  </span>
                </p>

              </div>




              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
              >
                Create Account
              </button>



              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="h-px bg-gray-200 flex-1" />
                OR
                <div className="h-px bg-gray-200 flex-1" />
              </div>



              <button
                className="w-full border py-3 rounded-xl flex items-center justify-center gap-3"
              >
                <FcGoogle size={22} />
                Continue with Google
              </button>



              <p className="text-center text-sm text-gray-500">

                Already have an account?

                <Link
                  href="/login"
                  className="text-orange-500 ml-1 font-semibold"
                >
                  Login
                </Link>

              </p>



            </form>


          </div>

        </div>


      </div>

    </div>
  );
};



function Input({
  icon,
  placeholder,
  type = "text"
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
}) {

  return (

    <div className="relative">

      <div className="absolute left-4 top-3.5 text-gray-400">
        {icon}
      </div>


      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:border-orange-500"
      />

    </div>

  )

}


export default RegisterPage;