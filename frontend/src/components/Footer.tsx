import React from "react";
import { Linkedin, BriefcaseBusiness} from "lucide-react";

const Footer = () => {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-8 text-white shadow-md border-t-1 mt-8">
        <div className="flex flex-row space-x-5">
            <Linkedin />
            <BriefcaseBusiness />
            <h1>Developed by Mercedes Xiong</h1>
        </div>
        <div>
            2025 @ Bookmarked
        </div>
        
    </nav>
  );
};

export default Footer;
