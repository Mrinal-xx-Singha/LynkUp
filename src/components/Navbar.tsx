import Link from "next/link";

import MobileNavbar from "@/components/MobileNavbar";
import DesktopNavbar from "@/components/DesktopNavbar";
import {syncUser} from "@/actions/userAction"
import {currentUser} from "@clerk/nextjs/server"


const Navbar = async() => {
  const user = await currentUser()
  if(user)await syncUser() //POST Request
  
  return (
    <nav className="sticky top-0 border-b w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              LinkUp
            </Link>
          </div>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
