import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
         
        <footer className="container mx-auto text-white mt-10 body-font z-10 bg-mainDark">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <Image width="125" height="50" src="/key.png" />
            </Link>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="https://github.com/47Key">
                <Image className="cursor-pointer" width="40" height="40" src="/github.svg"/>
              </a>
            </span>
          </div>
        </footer>
    );
}

export default Footer;
