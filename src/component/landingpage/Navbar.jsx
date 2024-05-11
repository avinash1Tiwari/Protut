import React from "react";
import { useState } from "react";
import AcmeLogo from '../../TestComponent/AcmeLogo'
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale, Menu } from "../../TestComponent/Icons";
import { Button } from "keep-react";

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    menu: <Menu className="text-black" fill="currentColor" size={30} />,
  };

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow">
      <div className="flex items-center">
        <AcmeLogo />
        <p className="font-bold text-black">PREPROCTIFY</p>
      </div>
      <div className="sm:hidden">
        <button className="text-black" onClick={toggleMenu}>
          {icons.menu}
        </button>
      </div>
      <div className={`hidden sm:flex gap-4 justify-center ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="relative">
          <button className="text-black bg-transparent border-none cursor-pointer" onClick={toggleMenu}>
            Features {icons.chevron}
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-56">
            <ul className="py-2">
              <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                {icons.scale}
                <span className="ml-2">MAANG</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                {icons.activity}
                <span className="ml-2">Start-up</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                {icons.flash}
                <span className="ml-2">Product-Based</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                {icons.server}
                <span className="ml-2">Service-Based</span>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" className="text-black">
          Pricing
        </a>
        <a href="#" className="text-black">
          Contact-us
        </a>
      </div>
      <div className="hidden sm:flex items-center">
        <a href="#" className="hidden lg:flex text-black">
          Login
        </a>
        <a href="#" className="text-black">
          Sign up
        </a>
      </div>
    </nav>
  );
}