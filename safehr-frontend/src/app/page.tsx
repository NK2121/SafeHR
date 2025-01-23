"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with real login logic
    alert("Logged in (mock)!");
  };

  return (
    <main className="flex min-h-screen font-sans text-gray-800">
      {/* Left Column */}
      <section className="flex flex-col justify-center w-full max-w-xl p-8 bg-white md:w-1/2">
        {/* Top Row: Sign In & Social Icons */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Sign In</h2>
          {/* Social Icons */}
          <div className="flex space-x-4">
            {/* Example: Facebook */}
            <a
              href="#"
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
              aria-label="Sign in with Facebook"
            >
              {/* Replace with an actual icon */}
              <svg
                className="w-5 h-5 text-blue-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.525 0H1.475A1.476 1.476 0 000 1.475v21.05A1.476 1.476 0 001.475 24h11.33v-9.294H9.847V11.29h2.958V8.47c0-2.933 1.794-4.53 4.415-4.53 1.255 0 2.333.093 2.645.135v3.07h-1.817c-1.426 0-1.701.678-1.701 1.67v2.18h3.402l-.444 3.415h-2.958V24h5.8A1.476 1.476 0 0024 22.525V1.475A1.476 1.476 0 0022.525 0z" />
              </svg>
            </a>

            {/* Example: Twitter */}
            <a
              href="#"
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
              aria-label="Sign in with Twitter"
            >
              {/* Replace with an actual icon */}
              <svg
                className="w-5 h-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.93 4.93 0 002.165-2.724... (icon truncated) ..." />
              </svg>
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
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none 
                         focus:ring-2 focus:ring-pink-300"
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
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none 
                         focus:ring-2 focus:ring-pink-300"
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
                className="form-checkbox h-4 w-4 text-pink-600"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="ml-2 text-sm text-gray-600">Remember Me</span>
            </label>
            <a
              href="#"
              className="text-sm text-pink-600 hover:underline"
            >
              Forgot Password
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded bg-gradient-to-r from-pink-500 to-pink-600 
                       text-white font-semibold hover:opacity-90 transition-all"
          >
            Sign In
          </button>
        </form>
      </section>

      {/* Right Column (Gradient area) */}
      <section
        className="
          relative 
          hidden md:flex md:w-1/2 
          items-center justify-center 
          bg-gradient-to-r from-pink-500 to-pink-600
          text-white
        "
      >
        <div className="absolute inset-0 opacity-80" />
        <div className="relative z-10 text-center p-8">
          <h2 className="text-3xl font-bold mb-2">Welcome to login</h2>
          <p className="mb-6">Don&apos;t have an account?</p>
          <a
            href="#"
            className="
              inline-block 
              px-6 py-2 
              border border-white 
              rounded 
              hover:bg-white hover:text-pink-600 
              transition-colors
            "
          >
            Sign Up
          </a>
        </div>
      </section>
    </main>
  );
}
