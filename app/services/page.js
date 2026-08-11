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

const packages = [
  {
    title: "Starter Lite Package",
    subtitle: "Perfect for Reels, Shorts & Quick Promotions",
    description:
      "Short and impactful AI videos designed for Facebook, Instagram Reels, TikTok, YouTube Shorts and WhatsApp Marketing.",
    duration: "Up to 30 Seconds",
    quality: "720P HD / 1080P Full HD",
    price: "PKR 2,000",
    features: [
      "AI Voice Over (English & Urdu)",
      "Background Music",
      "Logo Integration",
      "Text Animation",
      "Social Media Ready",
      "1 Revision",
    ],
  },
  {
    title: "Starter Package",
    subtitle: "Perfect for Social Media Promotions & Short Ads",
    description:
      "Professional AI videos for social media marketing and advertising.",
    duration: "1 Minute",
    quality: "720P HD / 1080P Full HD",
    price: "PKR 4,000",
    features: [
      "AI Voice Over (Any Language)",
      "Background Music",
      "Logo Integration",
      "Basic Motion Effects",
      "Social Media Ready",
      "2 Revisions",
    ],
  },
  {
    title: "Growth Package",
    subtitle: "Ideal for Product Marketing & Business Promotion",
    description:
      "Professional promotional AI videos for products and businesses.",
    duration: "Up to 1 Minute 30 Seconds",
    quality: "1080P Full HD / 2K",
    price: "PKR 6,000",
    features: [
      "Professional Script Assistance",
      "Voice Over (Any Language)",
      "Premium AI Visuals",
      "Subtitles Included",
      "Product Showcase",
      "3 Revisions",
    ],
  },
  {
    title: "Premium Package",
    subtitle: "Best for Brands & Corporate Marketing",
    description:
      "Premium quality AI videos with advanced branding features.",
    duration: "2 Minutes",
    quality: "1080P Full HD / 2K / 4K",
    price: "PKR 8,000",
    features: [
      "AI Avatar Presenter",
      "Premium AI Animation",
      "Professional Editing",
      "Commercial Usage Rights",
      "Custom Branding",
      "Priority Support",
      "3 Revisions",
    ],
  },
  {
    title: "Enterprise Package",
    subtitle: "For Companies, Training Videos & Advanced Campaigns",
    description:
      "Complete AI video production solution for businesses and organizations.",
    duration: "3–5 Minutes+",
    quality: "1080P Full HD / 2K / 4K",
    price: "PKR 8,000",
    features: [
      "Custom Script Writing",
      "AI Characters & Avatars",
      "Multi-Language Voice Over",
      "Advanced Visual Effects",
      "Dedicated Project Manager",
      "Priority Delivery",
      "5 Revisions",
    ],
  },
];

const socialPackages = [
  {
    title: "Starter Package",
    subtitle: "Best for Startups & Small Businesses",
    duration: "10 Days",
    price: "PKR 20,000",
    platforms: [
      "Facebook",
      "Instagram",
      "TikTok",
      "YouTube",
      "LinkedIn",
      "Pinterest",
    ],
    features: [
      "15 Professional Posts",
      "15 Animated Posts",
      "10 Reels / Short Videos",
      "Content Creation & Copywriting",
      "Daily Story Updates",
      "Hashtag Research & Strategy",
      "Profile Optimization",
      "Basic SEO Optimization",
      "Basic Inbox Management",
      "Performance Report",
    ],
  },

  {
    title: "Growth Package",
    subtitle: "Best for Growing Brands",
    duration: "20 Days",
    price: "PKR 40,000",
    platforms: [
      "Facebook",
      "Instagram",
      "TikTok",
      "LinkedIn",
      "Pinterest",
    ],
    features: [
      "25 Professional Posts",
      "25 Animated Posts",
      "20 Reels / Short Videos",
      "Advanced Content Strategy",
      "Daily Stories",
      "Professional Graphic Designing",
      "Advanced SEO",
      "Full Inbox Management",
      "Competitor Analysis",
      "Performance Report",
      "Basic Ad Campaign Setup",
    ],
  },

  {
    title: "Premium Package",
    subtitle: "Best for Established Businesses",
    duration: "Monthly",
    price: "PKR 100,000",
    platforms: [
      "Facebook",
      "Instagram",
      "TikTok",
      "LinkedIn",
      "Pinterest",
      "YouTube",
    ],
    features: [
      "40 Professional Posts",
      "30 Animated Posts",
      "30 Reels / AI Videos",
      "Premium Graphic Designing",
      "Advanced Content Marketing",
      "Daily Stories",
      "Complete Social Media Management",
      "Advanced SEO",
      "Complete Inbox Handling",
      "Competitor Research",
      "Analytics Reports",
      "Priority Support",
    ],
  },

  {
    title: "Enterprise Package",
    subtitle: "For Large Companies & Multi-Brand Businesses",
    duration: "Monthly",
    price: "Starting From PKR 150,000",
    platforms: [
      "Facebook",
      "Instagram",
      "TikTok",
      "LinkedIn",
      "Pinterest",
      "YouTube",
    ],
    features: [
      "All Premium Features",
      "Custom Content Plan",
      "AI Video Production",
      "Dedicated Account Manager",
      "Advanced Marketing Strategy",
      "Multiple Campaign Management",
      "Custom Reporting Dashboard",
      "Priority Support & Consultation",
    ],
  },
];

const ccnaPackages = [
  {
    title: "Basic Package",
    price: "PKR 20,000",
    description:
      "Perfect for beginners who want to start their networking career with CCNA fundamentals.",
    features: [
      "CCNA 200-301 Complete Theory",
      "Networking Fundamentals",
      "IPv4 & IPv6",
      "Subnetting",
      "Basic Routing & Switching",
      "PDF Notes",
      "Weekly Assignments",
      "Course Completion Certificate",
    ],
  },
  {
    title: "Standard Package",
    price: "PKR 35,000",
    description:
      "Ideal for students who want practical networking skills along with complete CCNA training.",
    features: [
      "Everything in Basic Package",
      "Practical Lab Sessions",
      "Cisco Packet Tracer Labs",
      "VLAN Configuration",
      "Routing Protocols (OSPF)",
      "NAT & ACL",
      "DHCP & DNS",
      "Mock Tests",
      "Interview Preparation",
      "Course Completion Certificate",
    ],
  },
  {
    title: "Premium Package",
    price: "PKR 50,000",
    description:
      "Best choice for students preparing for jobs and Cisco certification with advanced practical training.",
    features: [
      "Everything in Standard Package",
      "Real Cisco Device Practice",
      "Advanced Troubleshooting",
      "Wireless Networking",
      "Network Security",
      "SSH & Port Security",
      "Network Automation Basics",
      "Resume Building",
      "Job Placement Assistance",
      "Cisco Exam Guidance",
      "One-to-One Mentoring",
      "Certificate of Course Completion",
    ],
  },
  {
    title: "Professional Package",
    price: "PKR 65,000",
    description:
      "Complete career-focused CCNA package with advanced labs, interview preparation, and career support.",
    features: [
      "Complete CCNA 200-301 Training",
      "Unlimited Practical Labs",
      "Real Cisco Rack Practice",
      "Advanced Routing & Switching",
      "Network Security",
      "Wireless Networking",
      "Automation Fundamentals",
      "Mock Exams",
      "Interview Preparation",
      "CV & LinkedIn Optimization",
      "Internship Support",
      "Job Placement Assistance",
      "Cisco Certification Exam Guidance",
      "Premium Study Material",
      "Lifetime Technical Support",
    ],
  },
];

const cyberSecurityPackages = [
  {
    title: "Basic Security",
    price: "PKR 25,000",
    punchline: "Identify Risks. Strengthen Your Security.",
    features: [
      "Security Risk Assessment",
      "Website Security Check",
      "Network Security Review",
      "Vulnerability Scanning",
      "Malware & Threat Assessment",
      "Basic Firewall Review",
      "Security Recommendations",
      "Security Assessment Report",
    ],
  },

  {
    title: "Standard Security",
    price: "PKR 60,000",
    punchline: "Find Vulnerabilities Before Hackers Do.",
    features: [
      "Everything in Basic",
      "Vulnerability Assessment",
      "Web Application VAPT",
      "Network Security Assessment",
      "Firewall & Endpoint Security Review",
      "Security Hardening Recommendations",
      "Phishing Awareness Assessment",
      "Detailed Technical Report",
      "Remediation Guidance",
      "1 Re-Test After Fixes",
    ],
  },

  {
    title: "Premium Security",
    price: "PKR 120,000",
    punchline: "Advanced Protection for Your Digital Environment.",
    features: [
      "Everything in Standard",
      "Advanced VAPT",
      "Web & API Security Testing",
      "Network Penetration Testing",
      "Cloud Security Assessment",
      "Security Configuration Review",
      "Threat Detection & Response",
      "Incident Response Support",
      "Security Monitoring",
      "SIEM/SOC Assessment",
      "Compliance Readiness Review",
      "Executive & Technical Reports",
      "2 Re-Tests After Fixes",
      "Priority Support",
    ],
  },
];

export default function Page() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-600">
            Corvit Tech Solutions
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Complete Website Development & AI Video Production Services
          </p>

          <div className="w-28 h-1 bg-red-600 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Website Services */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Website Development Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 mb-4">
                <strong>Purpose:</strong> {service.purpose}
              </p>

              <h3 className="font-bold mb-3">Features</h3>

              <ul className="space-y-2 text-gray-700 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <div className="mt-6 bg-red-50 rounded-xl p-4">
                <p className="font-bold text-red-600">
                   {service.price}
                </p>

                <hr className="my-3" />

                <p className="font-semibold">
                   {service.delivery}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* AI Video Packages */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            AI Video Production Packages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
              >
                <div>
                  <h2 className="text-2xl font-bold text-red-600">
                    {pkg.title}
                  </h2>

                  <p className="text-sm font-semibold text-gray-700 mt-2">
                    {pkg.subtitle}
                  </p>

                  <p className="text-gray-600 mt-4 leading-7">
                    {pkg.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    <p>
                      <span className="font-semibold"> Duration:</span>{" "}
                      {pkg.duration}
                    </p>

                    <p>
                      <span className="font-semibold"> Video Quality:</span>{" "}
                      {pkg.quality}
                    </p>
                  </div>

                  <h3 className="text-lg font-bold mt-6 mb-3">
                    Features
                  </h3>

                  <ul className="space-y-2 text-gray-700">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>✔ {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="text-xl font-bold text-red-600">
                     {pkg.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Social Media Management */}

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600">
              Social Media Management Packages
            </h2>

            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Professional Social Media Management for Facebook, Instagram, TikTok,
              YouTube, LinkedIn & Pinterest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {socialPackages.map((pkg, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >

                <h2 className="text-2xl font-bold text-red-600">
                  {pkg.title}
                </h2>

                <p className="text-sm font-semibold text-gray-700 mt-2">
                  {pkg.subtitle}
                </p>

                <div className="mt-4 space-y-2">
                  <p>
                    <span className="font-bold"> Duration:</span> {pkg.duration}
                  </p>

                  <p>
                    <span className="font-bold"> Price:</span> {pkg.price}
                  </p>
                </div>

                <div className="mt-5">
                  <h3 className="font-bold text-lg">
                    Platforms
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {pkg.platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex-grow">
                  <h3 className="font-bold text-lg mb-3">
                    Features
                  </h3>

                  <ul className="space-y-2 text-gray-700">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>✔ {feature}</li>
                    ))}
                  </ul>
                </div>

              </div>

            ))}

          </div>
        </div>



    
      {/* CCNA Packages */}

{/* ===================== CCNA Training Packages ===================== */}

<div className="mt-20">
  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600">
      CCNA Training Packages
    </h2>

    <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
      Build your networking career with our industry-focused CCNA training
      packages. Learn Cisco networking from basic concepts to advanced
      practical labs with expert instructors.
    </p>

    <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    {ccnaPackages.map((pkg, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
      >
        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-red-600 mb-3">
            {pkg.title}
          </h3>

          <p className="text-gray-600 leading-7 mb-5">
            {pkg.description}
          </p>

          <div className="bg-red-50 rounded-xl p-4 mb-5">
            <p className="font-bold text-red-600">💰 Price</p>
            <p className="text-gray-700">{pkg.price}</p>
          </div>

          <h4 className="font-semibold text-lg mb-3">
            Services Included
          </h4>

          <ul className="space-y-2 text-gray-700">
            {pkg.features.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
        </div>

      
      </div>
    ))}
  </div>
</div>


      </div>

      {/* ================= CYBER SECURITY PACKAGES ================= */}

<div className="mt-20">

  {/* Heading */}

  <div className="text-center mb-12 px-2">

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-600">
      Cyber Security Packages
    </h2>

    <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-7 max-w-3xl mx-auto">
      Protect your digital environment with professional security
      assessments, vulnerability testing, penetration testing, and
      advanced security solutions.
    </p>

    <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>

  </div>


  {/* Cyber Security Cards */}

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

    {cyberSecurityPackages.map((pkg, index) => (

      <div
        key={index}
        className="flex flex-col bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-5 sm:p-6"
      >

        {/* Package Title */}

        <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
          {pkg.title}
        </h3>


        {/* Price */}

        <div className="bg-red-50 rounded-xl p-4 mb-5">

          <p className="font-bold text-red-600 text-lg">
            💰 Price
          </p>

          <p className="text-gray-800 font-semibold mt-1">
            {pkg.price}
          </p>

        </div>


        {/* Services */}

        <h4 className="text-lg font-bold text-gray-800 mb-4">
          Services Included
        </h4>

        <ul className="space-y-2 text-sm sm:text-base text-gray-700 flex-grow">

          {pkg.features.map((feature, i) => (

            <li
              key={i}
              className="flex items-start gap-2 leading-6"
            >

              <span className="text-red-600 font-bold">
                ✓
              </span>

              <span>
                {feature}
              </span>

            </li>

          ))}

        </ul>


        {/* Punchline */}

        <div className="mt-6 bg-gray-50 border-l-4 border-red-600 rounded-lg p-4">

          <p className="text-gray-700 italic font-medium text-sm sm:text-base">
            “{pkg.punchline}”
          </p>

        </div>


      </div>

    ))}

  </div>

</div>

    </section>
  );
}