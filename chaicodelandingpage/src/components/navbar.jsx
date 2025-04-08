import React from "react";
import { CircleDot } from "lucide-react";
import { NAVIGATION_LINKS } from "../constants/constants";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-green-700">
            <a href="/">Chai Code</a>
          </div>
          <div className="flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group flex items-center text-gray-700 hover:text-green-700 transition-colors duration-200"
              >
                <span className="text-base font-medium">{link.name}</span>
                {link.hasLiveBlinker && (
                  <CircleDot className="ml-1 w-3 h-3 text-red-500 animate-pulse" />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>
          <div>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors duration-200">
              <a
                href="https://courses.chaicode.com/learn/account/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// so on login link i attached a chai code sign in URL but after set i test so chai code page open in same tab, many times i notice in big website or webapp when you click on that so they open new tab and where that will reload so i want to give the same exp that why do some google and than find out target and rel option 
