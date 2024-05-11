import React from 'react'
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale, Menu } from "../../TestComponent/Icons";
import { Button } from 'keep-react';
import AcmeLogo from '../../TestComponent/AcmeLogo';
const DemoNav = () => {
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
  return (
    <nav>
    <div className="flex items-center">
        <AcmeLogo />
        <p className="font-bold text-black">PREPROCTIFY</p>
      </div>
          <span>Produts</span>
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
            <span>Pricing</span>
            <span>Contact Us</span>

            <Button>Login </Button>
            <Button>Signup</Button>
    </nav>
  )
}

export default DemoNav