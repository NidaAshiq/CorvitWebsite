import React from "react";

const Page = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-red-50 to-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-600 leading-tight">
            About Corvit Systems Faisalabad
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-7">
            Empowering students with industry-focused IT education, practical
            training, and globally recognized certifications.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 lg:p-8 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Introduction
          </h2>

          <p className="text-gray-700 leading-7 sm:leading-8">
            Corvit Systems Faisalabad is one of Pakistan’s leading IT training
            institutes, committed to delivering world-class education in modern
            technologies. For over 25 years, Corvit has trained thousands of
            students through practical learning, internationally recognized
            certifications, and experienced instructors.
          </p>
        </div>

        {/* Why Choose */}
        <div className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 lg:p-8 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Why Choose Corvit Systems Faisalabad?
          </h2>

          <p className="text-gray-700 leading-7 sm:leading-8">
            Corvit provides a motivating learning environment where students
            build technical expertise, confidence, and practical skills. The
            institute continuously updates its curriculum according to the
            latest industry requirements, helping students prepare for
            successful IT careers.
          </p>
        </div>

        {/* Training */}
        <div className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 lg:p-8 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            High-Quality Training Programs
          </h2>

          <p className="text-gray-700 leading-7 sm:leading-8">
            Corvit offers beginner to advanced certification programs in
            various IT domains. Students can also join flexible online learning
            programs designed according to their schedules and career goals.
          </p>
        </div>

        {/* Hands-on Learning */}
        <div className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 lg:p-8 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Industry-Focused & Hands-On Learning
          </h2>

          <p className="text-gray-700 mb-4">
            Corvit provides specialized training for:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Individual Students</li>
            <li>Corporate Organizations</li>
            <li>Universities</li>
            <li>International Students</li>
          </ul>

          <p className="text-gray-700 mt-5 leading-7 sm:leading-8">
            Students gain practical experience through real-world labs and
            projects instead of only theoretical learning.
          </p>
        </div>

        {/* Instructors */}
        <div className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 lg:p-8 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Experienced & Certified Instructors
          </h2>

          <p className="text-gray-700 mb-5">
            Our instructors hold internationally recognized certifications:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "CCIE",
              "MCT",
              "HCI",
              "HCN",
              "ITI",
              "PMP",
              "CIS",
              "Linux",
            ].map((item) => (
              <div
                key={item}
                className="bg-red-50 border border-red-200 rounded-lg p-4 text-center font-semibold hover:bg-red-100 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 lg:p-8 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Professional Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "70,400+ CCNA Professionals",
              "24,500+ CCNP Professionals",
              "2,203+ CCIE Professionals",
              "3,000+ CCNP Security Professionals",
              "2,000+ CCNP Voice Professionals",
              "28,060+ MCSE Professionals",
              "2,750+ MCITP Professionals",
              "9,561+ Linux Engineers",
              "350+ Juniper Certified Professionals",
              "76+ Huawei Certified Professionals",
              "7,000+ Corporate Trainings",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-lg p-4 font-medium hover:shadow-md transition"
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 lg:p-8 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Modern Computer Labs",
              "24/7 Lab Access",
              "CCIE Practice Racks",
              "Certified Instructors",
              "Career Counseling",
              "Job Placement Assistance",
              "Industrial Internships",
              "Nationwide Education Network",
            ].map((feature) => (
              <div
                key={feature}
                className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600 hover:bg-red-100 transition"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-red-600 text-white rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Conclusion
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8">
            Corvit Systems Faisalabad continues to shape the future of IT
            professionals by providing high-quality education, practical
            training, internationally recognized certifications, and excellent
            career opportunities.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Page;