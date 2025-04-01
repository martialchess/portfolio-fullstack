import React from "react";
import { FaChartArea, FaBattleNet, FaCat } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="py-20 px-4 bg-background relative">
      {/* Main Glass Card */}
      <div className="max-w-6xl mx-auto bg-white bg-opacity-80 shadow-xl rounded-3xl flex flex-col-reverse md:flex-row items-center justify-between px-10 py-14 backdrop-blur-md">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm text-[#3F83F8] mb-2">Hi, I am</p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E40AF] mb-2">
            Rida Malik
          </h1>

          <h2 className="text-lg md:text-xl font-medium text-gray-700 mb-4">
            Full-Stack Web Developer
          </h2>

          <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6">
            I specialize in creating beautiful, functional websites using modern tools like React, Next.js, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start mt-6">
            <Link
              href="/contact"
              className="border-2 border-black text-black px-6 py-2 rounded-full font-medium shadow hover:bg-black hover:text-white transition w-full md:w-auto text-center"
            >
              Contact Me
            </Link>

            <a
              href="/RidaMalik-CV.pdf"
              className="border-2 border-primary text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition w-full md:w-auto text-center"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src="/images/profilephoto.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="w-[280px] h-[280px] rounded-full shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Floating Stat Card */}
      <div className="max-w-6xl mx-auto -mt-14 z-10 relative bg-white shadow-lg rounded-4xl px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-4">
          <div className="text-blue-500 text-3xl">
            <FaChartArea />
          </div>
          <div>
            <div className="text-lg font-bold text-heading">2+ years</div>
            <div className="text-sm text-gray-500">Experience</div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-blue-500 text-3xl">
            <FaBattleNet />
          </div>
          <div>
            <div className="text-lg font-bold text-heading">5+</div>
            <div className="text-sm text-gray-500">Projects Completed</div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-blue-500 text-3xl">
            <FaCat />
          </div>
          <div>
            <div className="text-lg font-bold text-heading">24/7</div>
            <div className="text-sm text-gray-500">Online Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
