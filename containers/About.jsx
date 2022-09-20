import React from "react";
import styles from "../styles/Home.module.css";

const About = () => {
    return (
        <div id="about" className="w-screen flex flex-col justify-center items-center text-center bg-mainBlue px-10 pb-5 pt-10 font-hero">
            <div className={styles.typewriter}>
                <h1 id={styles.word} className="text-center">I'm a Full Stack Engineer</h1>
                <h2 className="text-center">Looking to make an impact with the code I write,</h2>
                <h2 className="text-center">Here are some of the technologies & frameworks I use</h2>
            </div>
        </div>
    );
}

export default About;