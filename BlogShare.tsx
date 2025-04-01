import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";

const BlogShare = () => {
  const router = useRouter();
  const fullUrl = `https://yourdomain.com${router.asPath}`;

  return (
    <div className="mt-10 flex gap-6 items-center">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary hover:text-white hover:bg-primary border border-primary px-4 py-2 rounded-md transition"
      >
        <FaFacebook size={18} />
        <span>Share</span>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary hover:text-white hover:bg-primary border border-primary px-4 py-2 rounded-md transition"
      >
        <FaLinkedin size={18} />
        <span>Share</span>
      </a>
    </div>
  );
};

export default BlogShare;
