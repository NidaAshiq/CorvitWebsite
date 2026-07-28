import React from "react";

const services = [
  {
    title: "Landing Page",
    purpose: "Designed for advertising campaigns and lead generation.",
    features: [
      "Single-page Design",
      "WhatsApp Button Integration",
      "Lead Generation Forms",
      "Strong Call-to-Action (CTA)",
    ],
    price: "PKR 15,000 – 30,000",
    delivery: "1–3 Days",
  },
  {
    title: "Portfolio Website",
    purpose: "Showcase personal work, projects, and achievements.",
    features: [
      "About Section",
      "Project Gallery",
      "Testimonials",
      "Social Media Links",
    ],
    price: "PKR 25,000 – 45,000",
    delivery: "3–5 Days",
  },
  {
    title: "Business Website",
    purpose: "Present company information and services online.",
    features: [
      "5–10 Pages",
      "WhatsApp Integration",
      "Basic SEO Setup",
      "Social Media Integration",
    ],
    price: "PKR 35,000 – 60,000",
    delivery: "5–7 Days",
  },
  {
    title: "Corporate Website",
    purpose: "Designed for large organizations and enterprises.",
    features: [
      "Departments Section",
      "Careers Portal",
      "Company News & Updates",
      "Advanced Responsive Design",
    ],
    price: "PKR 60,000 – 120,000",
    delivery: "7–10 Days",
  },
  {
    title: "E-Commerce Website",
    purpose: "Sell products and services online.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Gateway",
      "Customer Accounts",
    ],
    price: "PKR 50,000 – 100,000",
    delivery: "7–12 Days",
  },
  {
    title: "Educational Website (LMS)",
    purpose: "For schools, academies, and online learning platforms.",
    features: [
      "Course Management",
      "Student Portal",
      "Quizzes & Assessments",
      "Certificates",
    ],
    price: "PKR 70,000 – 150,000+",
    delivery: "10–20 Days",
  },
  {
    title: "News & Magazine Website",
    purpose: "Publish news, blogs, and articles.",
    features: [
      "Categories Management",
      "Search Functionality",
      "Author Profiles",
      "Blog Management",
    ],
    price: "PKR 50,000 – 90,000",
    delivery: "7–10 Days",
  },
  {
    title: "Booking Website",
    purpose: "Manage appointments and reservations online.",
    features: [
      "Booking Calendar",
      "Automated Notifications",
      "Customer Dashboard",
      "Online Payments",
    ],
    price: "PKR 45,000 – 80,000",
    delivery: "5–10 Days",
  },
  {
    title: "Membership Website",
    purpose: "Offer subscription plans and exclusive content.",
    features: [
      "User Registration & Login",
      "Membership Plans",
      "Premium Content Access",
      "Payment Integration",
    ],
    price: "PKR 60,000 – 120,000",
    delivery: "7–14 Days",
  },
];

export default function Page() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-600 leading-tight">
            Corvit Tech Solutions
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 leading-7 max-w-3xl mx-auto">
            Complete Website Development & Shopify Services Price List
            <br className="hidden sm:block" />
            Pakistan 2026
          </p>

          <div className="w-24 sm:w-28 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-5 sm:p-6"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-7 mb-5">
                  <span className="font-semibold text-gray-800">
                    Purpose:
                  </span>{" "}
                  {service.purpose}
                </p>

                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Features
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-red-50 rounded-xl p-4">
                <p className="font-bold text-red-600">
                  💰 Market Price
                </p>

                <p className="text-gray-700 text-sm sm:text-base">
                  {service.price}
                </p>

                <hr className="my-3" />

                <p className="font-bold text-red-600">
                  ⏳ Delivery Time
                </p>

                <p className="text-gray-700 text-sm sm:text-base">
                  {service.delivery}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}