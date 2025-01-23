"use client";
import React, { useState } from "react";
// 1) Import Link from next/link
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Logged in (mock)!");
  };

  return (
    <main className="flex min-h-screen w-full font-sans text-gray-800">
      {/* Left Column - White Form */}
      <section
        className="
          w-full md:w-1/2
          flex flex-col justify-center
          px-8 py-10
          bg-white
        "
      >
        {/* Top row: Sign In & Social Icons */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <div className="flex space-x-4">
            {/* Google icon */}
            <a
              href="#"
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
              aria-label="Sign in with Google"
            >
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            </a>
            {/* MNSU icon */}
            <a
              href="https://mnsu.edu"
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
              aria-label="MNSU"
            >
              <img src="/mnsu-icon.svg" alt="MNSU" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block mb-1 font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="
                w-full px-4 py-2 border border-gray-300 
                rounded focus:outline-none focus:ring-2
                focus:ring-blue-300
              "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="
                w-full px-4 py-2 border border-gray-300 
                rounded focus:outline-none focus:ring-2
                focus:ring-blue-300
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="ml-2 text-sm text-gray-600">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="
              w-full py-2 
              rounded 
              bg-gradient-to-r from-blue-500 to-blue-600
              text-white font-semibold
              hover:opacity-90 
              transition-all
            "
          >
            Sign In
          </button>
        </form>
      </section>

      {/* Right Column - Blue Gradient */}
      <section
        className="
          hidden md:flex md:w-1/2
          items-center justify-center
          bg-gradient-to-r from-blue-500 to-blue-600
          text-white
        "
      >
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold mb-2">Welcome to login</h2>
          <p className="mb-6">Don&apos;t have an account?</p>
          {/* 2) Replace <a> with <Link> to route to /signup */}
          <Link
            href="/signup"
            className="
              inline-block 
              px-6 py-2 
              border border-white 
              rounded 
              hover:bg-white hover:text-blue-600 
              transition-colors
            "
          >
            Sign Up
          </Link>
        </div>
      </section>
    </main>
  );
}
