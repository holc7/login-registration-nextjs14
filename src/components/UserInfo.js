"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="text-lg">
          Name: <span className="font-semibold">{session?.user?.name}</span>
        </div>
        <div className="text-lg">
          Email: <span className="font-semibold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="w-full bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
