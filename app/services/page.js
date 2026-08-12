"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

/* =====================================================
   WEBSITE DEVELOPMENT PACKAGES
===================================================== */

const services = [
  {
    title: "Landing Page",
    purpose:
      "Designed for advertising campaigns and lead generation.",
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
    purpose:
      "Showcase personal work, projects, and achievements.",
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
    purpose:
      "Present company information and services online.",
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
    purpose:
      "Designed for large organizations and enterprises.",
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
    purpose:
      "Sell products and services online.",
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
    purpose:
      "For schools, academies, and online learning platforms.",
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
    purpose:
      "Publish news, blogs, and articles.",
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
    purpose:
      "Manage appointments and reservations online.",
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
    purpose:
      "Offer subscription plans and exclusive content.",
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

/* =====================================================
   AI VIDEO PACKAGES
===================================================== */

const aiPackages = [
  {
    title: "Starter Lite Package",
    description:
      "Perfect for Reels, Shorts & Quick Promotions.",
    duration: "Up to 30 Seconds",
    quality: "720P HD / 1080P Full HD",
    features: [
      "AI Voice Over (English and Urdu)",
      "Background Music (On Demand)",
      "Logo Integration (On Demand)",
      "Text Animation (On Demand)",
      "Social Media Ready Format",
      "1 Revision",
    ],
    price: "Contact Us",
  },

  {
    title: "Starter Package",
    description:
      "Perfect for Social Media Promotions & Short Ads.",
    duration: "1 Minute",
    quality: "720P HD / 1080P Full HD",
    features: [
      "AI Voice Over (Any Language)",
      "Background Music (On Demand)",
      "Logo Integration (On Demand)",
      "Basic Motion Effects (On Demand)",
      "Social Media Ready Format",
      "2 Revisions",
    ],
    price: "PKR 2,000",
  },

  {
    title: "Growth Package",
    description:
      "Ideal for Product Marketing & Business Promotion.",
    duration: "Up to 1 Minute 30 Seconds",
    quality: "1080P Full HD / 2K",
    features: [
      "Professional Script Assistance",
      "Urdu or English Voice Over",
      "Premium AI Visuals (On Demand)",
      "Subtitles Included (On Demand)",
      "Product & Service Showcase",
      "3 Revisions",
    ],
    price: "PKR 4,000",
  },

  {
    title: "Premium Package",
    description:
      "Best for Brands & Corporate Marketing.",
    duration: "2 Minutes",
    quality: "1080P Full HD / 2K / 4K",
    features: [
      "AI Avatar Presenter (On Demand)",
      "Premium AI Animation (On Demand)",
      "Professional Editing (On Demand)",
      "Commercial Usage Rights",
      "Custom Branding",
      "Priority Support",
      "3 Revisions",
    ],
    price: "PKR 6,000",
  },

  {
    title: "Enterprise Package",
    description:
      "For Companies, Training Videos & Advanced Campaigns.",
    duration: "3 Minutes to 5 Minutes+",
    quality: "1080P / 2K / 4K",
    features: [
      "Custom Script Writing",
      "AI Characters & Avatars",
      "Multi-Language Voice Over",
      "Advanced Visual Effects",
      "Dedicated Project Manager",
      "Priority Delivery",
      "5 Revisions",
    ],
    price: "PKR 8,000",
  },
];

/* =====================================================
   SOCIAL MEDIA PACKAGES
===================================================== */

const socialPackages = [
  {
    title: "Starter Package",
    description:
      "Best for Startups & Small Businesses.",
    duration: "10 Days",
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
      "Monthly Performance Report",
    ],
    price: "PKR 20,000 / 10 Days",
  },

  {
    title: "Growth Package",
    description:
      "Best for Growing Brands.",
    duration: "20 Days",
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
      "Daily Stories & Engagement Content",
      "Professional Graphic Designing",
      "Advanced SEO Optimization",
      "Full Inbox Management",
      "Competitor Analysis",
      "Monthly Performance Report",
      "Basic Ad Campaign Setup",
    ],
    price: "PKR 40,000 / 20 Days",
  },

  {
    title: "Premium Package",
    description:
      "Best for Established Businesses & Brands.",
    duration: "Monthly",
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
      "Advanced Content Marketing Strategy",
      "Daily Stories & Audience Engagement",
      "Full Social Media Management",
      "Advanced SEO Optimization",
      "Complete Inbox Handling",
      "Competitor Research & Market Analysis",
      "Ad Campaign Management Support",
      "Detailed Analytics & Growth Reports",
      "Priority Support",
    ],
    price: "PKR 100,000 / Month",
  },

  {
    title: "Enterprise Package",
    description:
      "For Large Companies & Multi-Brand Businesses.",
    duration: "Monthly",
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
    price: "Starting From PKR 150,000 / Month",
  },
];

/* =====================================================
   CCNA PACKAGES
===================================================== */

const ccnaPackages = [
  {
    title: "Basic Package",
    description:
      "Perfect for beginners who want to start their networking career with CCNA fundamentals.",
    price: "PKR 20,000",
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
    description:
      "Ideal for students who want practical networking skills along with complete CCNA training.",
    price: "PKR 35,000",
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
    description:
      "Best choice for students preparing for jobs and Cisco certification with advanced practical training.",
    price: "PKR 50,000",
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
    description:
      "Complete career-focused CCNA package with advanced labs, interview preparation, and career support.",
    price: "PKR 65,000",
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

/* =====================================================
   CYBER SECURITY PACKAGES
===================================================== */

const cyberPackages = [
  {
    title: "Basic Security",
    price: "PKR 25,000",
    punchline:
      "Identify Risks. Strengthen Your Security.",
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
    punchline:
      "Find Vulnerabilities Before Hackers Do.",
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
    punchline:
      "Advanced protection for businesses and organizations.",
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

/* =====================================================
   REUSABLE SWIPER
===================================================== */

function PackageSwiper({
  data,
  type = "package",
}) {
  return (
    <Swiper
      modules={[
        EffectCoverflow,
        Pagination,
        Autoplay,
      ]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 140,
        modifier: 1.2,
        slideShadows: false,
      }}
      className="package-swiper"
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          className="!w-[285px] sm:!w-[330px] lg:!w-[350px]"
        >
          <div className="package-card">

            {/* Top Icon */}
            <div className="package-icon">
              {type === "ccna"
                ? "CCNA"
                : type === "cyber"
                ? "🛡️"
                : type === "ai"
                ? "AI"
                : type === "social"
                ? "📱"
                : "🌐"}
            </div>

            {/* Title */}
            <h3 className="package-title">
              {item.title}
            </h3>

            {/* Description / Punchline */}
            {(item.description || item.punchline) && (
              <p className="package-description">
                “{item.description || item.punchline}”
              </p>
            )}

            {/* Price */}
            <div className="package-price-box">
              <p>PACKAGE PRICE</p>
              <h4>{item.price}</h4>
            </div>

            {/* Extra information */}
            {item.duration && (
              <div className="package-extra">
                <span>Duration</span>
                <strong>{item.duration}</strong>
              </div>
            )}

            {item.quality && (
              <div className="package-extra">
                <span>Video Quality</span>
                <strong>{item.quality}</strong>
              </div>
            )}

            {item.platforms && (
              <div className="package-platforms">
                <h4>Platforms</h4>

                <div className="platform-list">
                  {item.platforms.map(
                    (platform, i) => (
                      <span key={i}>
                        {platform}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Features */}
            <div className="package-features">
              <h4>
                What's Included?
              </h4>

              <ul>
                {item.features.map(
                  (feature, i) => (
                    <li key={i}>
                      <span>✓</span>
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Button */}
            {/* <button className="package-button">
              {type === "ccna"
                ? "Enroll Now"
                : "Get Started"}
            </button> */}

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

/* =====================================================
   SECTION HEADING
===================================================== */

function SectionHeading({
  title,
  description,
}) {
  return (
    <div className="services-heading">

      <div className="heading-badge">
        ✦ Corvit Tech Solutions
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <div className="heading-line"></div>

    </div>
  );
}

/* =====================================================
   MAIN PAGE
===================================================== */

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* =================================================
          WEBSITE DEVELOPMENT
      ================================================= */}

      <section className="service-section">

        <SectionHeading
          title="Website Development Services"
          description="Professional websites designed to help businesses build a powerful online presence."
        />

        <PackageSwiper
          data={services}
          type="website"
        />

      </section>


      {/* =================================================
          AI VIDEO
      ================================================= */}

      <section className="service-section">

        <SectionHeading
          title="AI Video Production Packages"
          description="Transforming Ideas Into Powerful AI Videos for social media, brands and businesses."
        />

        <PackageSwiper
          data={aiPackages}
          type="ai"
        />

      </section>


      {/* =================================================
          SOCIAL MEDIA
      ================================================= */}

      <section className="service-section">

        <SectionHeading
          title="Social Media Management Packages"
          description="Professional social media management for businesses, startups and established brands."
        />

        <PackageSwiper
          data={socialPackages}
          type="social"
        />

      </section>


      {/* =================================================
          CCNA
      ================================================= */}

      <section className="service-section">

        <SectionHeading
          title="CCNA Training Packages"
          description="Choose the perfect CCNA package based on your learning goals, practical networking needs and career objectives."
        />

        <PackageSwiper
          data={ccnaPackages}
          type="ccna"
        />

      </section>


      {/* =================================================
          CYBER SECURITY
      ================================================= */}

      <section className="service-section">

        <SectionHeading
          title="Cyber Security Packages"
          description="Identify vulnerabilities, strengthen security and protect your digital infrastructure."
        />

        <PackageSwiper
          data={cyberPackages}
          type="cyber"
        />

      </section>


  

    </main>
  );
}