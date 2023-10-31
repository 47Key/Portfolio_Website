import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navlink from "../components/Navlink";
import LiftedButton from "../components/LiftedButton";

const Navbar = () => {
    return (
        <header className="text-white-600 body-font container m-auto mt-3 z-20 bg-transparent">
          <div className="rounded-[20px] bg-[#15202B]">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <Link href="/" className="flex title-font font-medium items-center text-white mb-5 md:mb-0">
                <Image width="125" height="50" src="/key.png" />
              </Link>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center py-2">
               <Navlink title="Projects" route="/#projects" />
               <Navlink title="About Me" route="/#about" />
               <Navlink title="Contact" route="/#contact" />
              </nav>
              <Link href="/ryley-keegan_resume.pdf" locale={false}>
                <LiftedButton 
                name="Resume" 
                svg={false} 
                className="bg-blue-500 hover:text-blue-500 hover:border-blue-500 font-bold text-base mr-5" />
              </Link>
            </div>
          </div>
        </header>
    );
}

export default Navbar;