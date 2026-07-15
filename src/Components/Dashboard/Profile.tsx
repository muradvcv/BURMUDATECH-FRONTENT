"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const user = session?.user;

  if (!user) return null;

  return (
    <div className=" overflow-hidden rounded-xl border border-gray-200/80 bg-white p-3 shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3">

        {/* বাম পাশে: গোল এভাটার (ক্লিক করলে প্রোফাইলে যাবে) */}
        <Link
          href={`/dashboard/myprofile`}
          className="group relative shrink-0"
        >
          <Image
            src={user.image || "/default-avatar.png"}
            alt={user.name ?? "User"}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border-2 border-orange-500 object-cover ring-2 ring-orange-50 dark:ring-slate-800 transition-transform group-hover:scale-105"
          />
          {/* অনলাইন ইন্ডিকেটর */}
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500 dark:border-slate-900" />
        </Link>

        {/* ডান পাশে: নাম এবং তার নিচে লগআউট বাটন */}
        <div className="flex-1 min-w-0 flex flex-col gap-1">

          {/* ইউজার নেম */}
          <Link
            href={`/dashboard/myprofile`}
            className="group flex items-center gap-1"
          >
            <h2 className="truncate text-sm font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
              {user.name ?? "Unknown User"}
            </h2>
            {user.role === "admin" && (
              <ShieldCheck className="h-4 w-4 shrink-0 text-orange-500" />
            )}
          </Link>

          {/* লগআউট বাটন */}
          <Button
            onPress={async () => {
              await authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.replace("/");
                  },
                },
              });
            }}
            className="flex w-fit items-center gap-1 rounded-lg bg-orange-50 hover:bg-red-50 px-2 py-0.5 text-[11px] font-bold text-orange-600 hover:text-red-600 dark:bg-slate-800 dark:hover:bg-red-950/30 dark:text-orange-400 dark:hover:text-red-400 h-6 transition-all duration-200"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>

        </div>
      </div>
    </div>
  );
};

export default Profile;