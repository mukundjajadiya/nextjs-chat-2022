import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <div className="w-80 bg-blue-200 h-screen border-r-[2px] border-gray-200">
        <div className="flex h-20 w-full bg-red-100 items-center">
          <FaUserCircle className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
