import React from "react";
import styles from "../styles/Home.module.css";

const FrameworkLogo = ({ name, logo }) => {
    return (
        <div id={styles.frameworkLogo} className="cursor-pointer bg-[#fafafa] rounded-full flex flex-col align-baseline justify-center p-3 my-5 mx-5 shadow-black shadow-[-3px_2px_0px] hover:shadow-black hover:shadow-[-5px_5px_2px] border-black border-4 duration-200">
            <h1 id={styles.frameworkLogoName} className="flex text-center text-md font-extrabold justify-center items-center text-black hover:relative">{name}</h1>
            <img loading="lazy" src={logo} />
        </div>
    );
}

export default FrameworkLogo;