import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <Image
            width={300}
            height={300}
            src="/images/profilephoto1.jpg"
            alt="Profile"
            className="w-[380px] rounded-xl shadow-md object-cover"
          />
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            &quot;I&apos;m a passionate developer with a love for creating dynamic and responsive web applications. I have a strong foundation in JavaScript, React, and Node.js, and I&apos;m always eager to learn new technologies and improve my skills. My goal is to build applications that not only meet user needs but also provide a seamless and enjoyable experience. In my free time, I love exploring new programming languages, contributing to open-source projects, and staying updated with the latest trends in web development. Currently I&apos;m pursuing backend development and looking to expand my knowledge in cloud technologies and DevOps practices.&quot;
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
    </section>
  );
};

export default About;
