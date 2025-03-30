import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow">
            <nav className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">Rida&apos;s Portfolio</Link>
                <ul className="flex space-x-6 text-sm font-medium text-gray-700">
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;