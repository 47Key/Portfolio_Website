import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
         
        <footer className="container mx-auto text-white mt-10 body-font z-10 bg-mainDark">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img width="100" height="50" src="key.png" />
            </Link>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link href="https://github.com/47Key" className="text-white cursor-pointer">
                <img width="40" height="40" src="github.svg"/>
              </Link>
            </span>
          </div>
        </footer>
    );
}

export default Footer;
