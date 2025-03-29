import React, { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>
          &copy; {year ?? "----"} Rida Malik's Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
