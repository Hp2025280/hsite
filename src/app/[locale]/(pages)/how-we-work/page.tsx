"use client";

import React from "react";
import { 
  Briefcase, 
  BarChart, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle, 
  MessageSquare 
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MeteorDemo } from "@/components/demo/meteorsDemo";
import Header from "@/components/demo/navbar";
import { motion } from "framer-motion";

const ComoAtuamos: React.FC = () => {
  const iconSize = 32;
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const features = [
    {
      icon: <Briefcase size={iconSize} />,
      title: "Flexibility",
      description: "Adapt your team structure to the needs of your business."
    },
    {
      icon: <BarChart size={iconSize} />,
      title: "Performance Management",
      description: "Constantly evaluate and optimize team and process performance."
    },
    {
      icon: <AlertTriangle size={iconSize} />,
      title: "Risk Reduction",
      description: "Minimize risks with agile solutions and well-defined strategies."
    },
    {
      icon: <TrendingUp size={iconSize} />,
      title: "Scalability",
      description: "Grow your business capacity in a sustainable and controlled way."
    },
    {
      icon: <CheckCircle size={iconSize} />,
      title: "Quality Control",
      description: "Ensure excellence in every delivery and process."
    },
    {
      icon: <MessageSquare size={iconSize} />,
      title: "Continuous Support",
      description: "Receive ongoing assistance to overcome challenges and improve results."
    }
  ];

  const benefits = [
    {
      icon: <Briefcase size={iconSize} />,
      title: "Flexibility",
      description: "Quickly adapt to market and operational changes."
    },
    {
      icon: <BarChart size={iconSize} />,
      title: "Performance Management",
      description: "Monitor and adjust processes to ensure high performance."
    },
    {
      icon: <AlertTriangle size={iconSize} />,
      title: "Risk Reduction",
      description: "Identify and minimize potential issues before they impact operations."
    },
    {
      icon: <TrendingUp size={iconSize} />,
      title: "Scalability",
      description: "Enable your business to grow in a controlled and efficient way."
    },
    {
      icon: <CheckCircle size={iconSize} />,
      title: "Quality Control",
      description: "Ensure quality with well-defined and monitored processes."
    },
    {
      icon: <MessageSquare size={iconSize} />,
      title: "Continuous Support",
      description: "Provide consistent support, always ready to meet business needs."
    }
  ];

  return (
    <div className="bg-black">
      <Head>
        <title>How We Work | H</title>
        <meta name="description" content="Discover how H can help your company grow" />
      </Head>
      
      {/* Nav */}
      <Header />

      {/* Hero Section with Spotlight-style background */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative min-h-[85vh] bg-black flex flex-col items-center justify-center overflow-hidden"
      >
        <MeteorDemo />
      </motion.div>

      <div className="bg-black text-white">
        {/* Mission Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="py-24 max-w-6xl mx-auto px-4"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeIn} className="text-4xl font-bold text-[#EDFF8B] mb-4">Our Mission</motion.h2>
            <motion.div variants={fadeIn} className="w-16 h-1 bg-[#EDFF8B] mx-auto mt-4 mb-8"></motion.div>
          </div>
          
          <motion.div 
            variants={fadeIn}
            className="bg-black/30 border border-neutral-800 p-10 rounded-2xl shadow-lg backdrop-blur-sm hover:border-[#EDFF8B]/30 transition-all duration-500 group"
          >
            <p className="text-lg leading-relaxed text-neutral-300 group-hover:text-white transition-colors duration-300">
              Our mission is to embed a qualified and experienced team into your company to work on specific projects
              or to provide ongoing support. This enables H to optimize your internal processes, increase team
              efficiency, and improve how you leverage data.
            </p>
            <p className="text-lg leading-relaxed mt-6 text-neutral-300 group-hover:text-white transition-colors duration-300">
              If your company&apos;s goal is to grow through data-driven strategies, this partnership model offers
              flexibility and tailored innovation to meet your needs.
            </p>
            <div className="w-0 h-1 bg-[#EDFF8B] group-hover:w-full transition-all duration-700 mt-8"></div>
          </motion.div>
        </motion.section>

        {/* Outsourcing Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="py-20 max-w-6xl mx-auto px-4"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeIn} className="text-4xl font-bold text-[#EDFF8B] mb-4">How Outsourcing Works in Practice</motion.h2>
            <motion.div variants={fadeIn} className="w-16 h-1 bg-[#EDFF8B] mx-auto mt-4"></motion.div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-black/30 border border-neutral-800 p-8 rounded-xl shadow-md transition-all duration-300 hover:border-[#EDFF8B]/30 hover:shadow-[#EDFF8B]/10 hover:shadow-lg hover:scale-105 group cursor-pointer"
              >
                <div className="text-[#EDFF8B] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#EDFF8B] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="py-20 max-w-6xl mx-auto px-4 bg-black/30"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeIn} className="text-4xl font-bold text-[#EDFF8B] mb-4">Benefits</motion.h2>
            <motion.div variants={fadeIn} className="w-16 h-1 bg-[#EDFF8B] mx-auto mt-4"></motion.div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-black/30 border border-neutral-800 p-8 rounded-xl shadow-md transition-all duration-300 hover:border-[#EDFF8B]/30 hover:shadow-[#EDFF8B]/10 hover:shadow-lg hover:scale-105 group cursor-pointer"
              >
                <div className="text-[#EDFF8B] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#EDFF8B] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="py-24 max-w-6xl mx-auto px-4"
        >
          <motion.div 
            variants={fadeIn}
            className="bg-gradient-to-br from-black to-black/70 border border-[#EDFF8B]/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden group"
          >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[#EDFF8B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#EDFF8B]/5 blur-3xl"></div>
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#EDFF8B]/5 blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-6 text-white">
                Ready to <span className="text-[#EDFF8B]">boost</span> your business?
              </motion.h2>

              <motion.p variants={fadeIn} className="text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
                Discover how our team of experts can help your company reach new levels of efficiency and growth.
              </motion.p>

              <motion.div variants={fadeIn}>
                <Link
                  href="https://cal.com/hperformance-gamirl/45min"
                  className="px-8 py-4 bg-[#EDFF8B] text-black font-bold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#EDFF8B]/20 transition-all duration-300 inline-block"
                >
                  Talk to H
                </Link>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-[#EDFF8B] opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-[#EDFF8B] opacity-30"></div>
            <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-[#EDFF8B] opacity-30"></div>
            <div className="absolute top-1/2 left-10 w-2 h-2 rounded-full bg-[#EDFF8B] opacity-30"></div>
          </motion.div>
        </motion.section>
        
        {/* Footer */}
        <motion.footer 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-black text-white py-8 border-t border-neutral-800"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Logo */}
              <div className="mb-6 md:mb-0">
                <Image
                  src="/logowhite.png"
                  alt="Logo"
                  width={100}
                  height={25}
                  className="hover:opacity-80 transition-opacity"
                />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                <Link href="#sections" className="text-neutral-300 hover:text-[#EDFF8B] transition-colors duration-300">Solutions</Link>
                <Link href="/how-we-work" className="text-neutral-300 hover:text-[#EDFF8B] transition-colors duration-300">How We Work</Link>
                <Link href="#faq" className="text-neutral-300 hover:text-[#EDFF8B] transition-colors duration-300">FAQ</Link>
                <Link href="https://cal.com/hperformance-gamirl/45min" className="text-neutral-300 hover:text-[#EDFF8B] transition-colors duration-300">Contact</Link>
              </div>
            </div>

            <div className="border-t border-neutral-800 mt-6 pt-6 text-center">
              <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} H. All rights reserved.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default ComoAtuamos;