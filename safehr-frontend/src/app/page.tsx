"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-600">
      {/* Centered Container / Card */}
      <div className="max-w-md p-8 bg-white/80 backdrop-blur-md rounded-md shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to SAFEHR</h1>
        <p className="text-gray-700 mb-6">
          An advanced yet easy-to-use HR management system, designed for you.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="/login"
            className="
              px-6 py-2 
              bg-blue-600 text-white
              rounded 
              hover:bg-blue-700 
              transition-colors
            "
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="
              px-6 py-2
              bg-white text-blue-600
              border border-blue-600
              rounded 
              hover:bg-blue-50
              transition-colors
            "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
