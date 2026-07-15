"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // ডেটা লোড হওয়ার সময় একটি সুন্দর স্কেলেটন বা লোডার দেখাবে
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  // যদি কোনো কারণে ইউজার লগইন করা না থাকে
  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 font-medium">No user session found. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* প্রোফাইল কার্ড */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden">

        {/* টপ ব্যানার বা ব্যাকগ্রাউন্ড */}
        <div className="h-32 bg-[#f6bc8a]"></div>

        {/* ইউজার ইনফো সেকশন */}
        <div className="px-6 pb-8 relative">

          {/* প্রোফাইল ইমেজ (ব্যানারের সাথে ওভারল্যাপ করা) */}
          <div className="absolute -top-16 left-6">
            <Image
              src={user.image || "https://images.pexels.com/videos/38286668/pexels-photo-38286668.jpeg?auto=compress&w=1200"}
              width={100}
              height={100}
              alt={user.name || "User Avatar"}
              className="w-32 h-32 rounded-2xl object-cover border-4 border-white dark:border-slate-900 shadow-md"
            />
          </div>

          {/* নাম, রোল এবং এডিট বাটন */}
          <div className="pt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                {user.name || "MD. Murad"}
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 capitalize">
                  {user.role || "User"}
                </span>
                {user.emailVerified ? (
                  <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                    ✓ Verified
                  </span>
                ) : (
                  <span className="text-xs text-amber-500 font-medium flex items-center gap-1">
                    ⚠ Unverified
                  </span>
                )}
              </div>
            </div>

            {/* এডিট প্রোফাইল বাটন */}
            <button
              onClick={() => alert("Edit Profile modal/page coming soon!")}
              className="px-5 py-2.5 bg-orange-400 hover:bg-orange-500 text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-sm shadow-blue-100 dark:shadow-none hover:shadow-md"
            >
              Edit Profile
            </button>
          </div>

          <hr className="my-6 border-slate-100 dark:border-slate-800" />

          {/* ডিটেইলস গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* কন্ট্যাক্ট ইনফরমেশন */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Contact Information
              </h3>

              <div className="space-y-3">
                <div>
                  <span className="text-xs text-slate-400">Email Address</span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {user.email || "N/A"}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400">Phone Number</span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {user.num || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* ঠিকানা এবং অন্যান্য তথ্য */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Address & Meta Info
              </h3>

              <div className="space-y-3">
                <div>
                  <span className="text-xs text-slate-400">Location</span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {user.city ? `${user.city}, ${user.address}` : "N/A"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-xs text-slate-400">Post Code</span>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {user.postCode || "N/A"}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400">User ID</span>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 truncate" title={user.id}>
                      {user.id ? `#${user.id.slice(-6)}` : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* অ্যাকাউন্ট মেম্বারশিপ ডেট */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
            <p>Joined: {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "N/A"}</p>
            <p>Last Updated: {user.updatedAt ? new Date(user.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "N/A"}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;