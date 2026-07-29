"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-red-50 to-white flex items-center justify-center px-5 sm:px-8 lg:px-12 py-16">
      <div className="max-w-5xl w-full text-center">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Build Your Future with
          <span className="block text-red-600 mt-2">
            Corvit Tech Solutions
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-7 sm:leading-8 max-w-3xl mx-auto">
          At <strong>Corvit Agency</strong>, we help businesses grow by providing
          innovative and result-driven digital solutions. Our team specializes in
          <strong> Website Development</strong>, <strong>Web Applications</strong>,{" "}
          <strong>UI/UX Design</strong>, and <strong>Digital Marketing</strong> to
          strengthen your online presence and help you achieve your business goals
          with creativity, quality, and reliability.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/services">
            <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 cursor-pointer">
              Explore Services
            </button>
          </Link>

          <Link href="/contact">
            <button className="w-full sm:w-auto border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}