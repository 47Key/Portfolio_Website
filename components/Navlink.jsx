import React from "react";
import Link from "next/link";

const Navlink = ({ title, route }) => {
    return (
      <Link href={`${route}`}>
        <p className="cursor-pointer px-5 text-white hover:text-mainBlue text-lg">{title}</p>
      </Link>
    );
}

export default Navlink;