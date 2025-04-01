import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">MyPortfolio</Link>
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/typography">Typography</Link></li>
          <li><Link href="/colors">Colors</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
