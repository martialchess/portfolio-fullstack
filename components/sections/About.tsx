import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 bg-[#f9fafa]">
      {/* Center and constrain entire content */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <Image
              width={200}
              height={200}
              src="/images/profilephoto1.jpg"
              alt="Profile"
              className="w-[350px] rounded-xl shadow-md object-cover"
            />
          </div>

          {/* About Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              &quot;I&apos;m a passionate developer with a love for creating dynamic and responsive web applications. I have a strong foundation in JavaScript, React, and Node.js, and I&apos;m always eager to learn new technologies and improve my skills. &quot;
            </p>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Name:</strong> Rida Malik
                </li>
                <li>
                  <strong>Email:</strong> ridamaliktech@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
