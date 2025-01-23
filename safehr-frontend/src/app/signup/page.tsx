"use client";
import React, { useState } from "react";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with real sign-up logic, e.g.:
    // await fetch('/api/signup', { method: 'POST', ... });
    alert(`Signing up (mock):
    Full Name: ${fullName}
    Email: ${schoolEmail}
    Password: ${password}`);
  };

  return (
    <main className="flex min-h-screen w-full font-sans text-gray-800">
      {/* Left Column: Sign Up Form */}
      <section className="w-full md:w-1/2 flex flex-col justify-center px-8 py-10 bg-white">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block mb-1 font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Your Name"
              className="
                w-full px-4 py-2 
                border border-gray-300 
                rounded 
                focus:outline-none 
                focus:ring-2
                focus:ring-blue-300
              "
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* School Email */}
          <div>
            <label htmlFor="schoolEmail" className="block mb-1 font-medium">
              School Email
            </label>
            <input
              id="schoolEmail"
              type="email"
              placeholder="name@school.edu"
              className="
                w-full px-4 py-2 
                border border-gray-300 
                rounded 
                focus:outline-none 
                focus:ring-2
                focus:ring-blue-300
              "
              value={schoolEmail}
              onChange={(e) => setSchoolEmail(e.target.value)}
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
              placeholder="********"
              className="
                w-full px-4 py-2 
                border border-gray-300 
                rounded 
                focus:outline-none 
                focus:ring-2
                focus:ring-blue-300
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign Up Button */}
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
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign In
          </a>
        </div>
      </section>

      {/* Right Column: Gradient */}
      <section
        className="
          hidden md:flex md:w-1/2
          items-center justify-center
          bg-gradient-to-r from-blue-500 to-blue-600
          text-white
        "
      >
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold mb-2">Welcome to SAFE-HR</h2>
          <p className="mb-6">Create your account and explore!</p>
          
        </div>
      </section>
    </main>
  );
}
