import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            苏儿朵
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">关于我们</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">公司业务</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">产品展示</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">联系我们</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              关于我们
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              公司业务
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              产品展示
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              联系我们
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;