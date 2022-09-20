import React from "react";
import FrameworkLogo from "../components/FrameworkLogo";
import styles from "../styles/Home.module.css";
const FeaturedFramework = () => {
    return (
        <div className="bg-[#065ae1] w-screen -mt-2">
            <div id={styles.featuredFramework} className="flex w-screen h-full justify-center align-baseline items-center flex-row">
                <FrameworkLogo name="React JS" logo="./reactjs.svg" />
                <FrameworkLogo name="Tailwind CSS" logo="./tailwindcss.svg" />
                <FrameworkLogo name="Next JS" logo="./nextjs.svg" />
                <FrameworkLogo name="Node JS" logo="./nodejs.svg" />
                <FrameworkLogo name="Electron JS" logo="./electronjs.svg" />
                <FrameworkLogo name="Express JS" logo="./express.svg" />
                <FrameworkLogo name="GIT" logo="./git.svg" />
                <FrameworkLogo name="Python" logo="./python.svg" />
                <FrameworkLogo name="Flask" logo="./flask.svg" />
                <FrameworkLogo name="Docker" logo="./docker.svg" />
                <FrameworkLogo name="PostgreSQL" logo="./postgres.svg" />
                <FrameworkLogo name="AWS" logo="./aws.svg" />
                <FrameworkLogo name="Firebase" logo="./firebase.svg" />
            </div>
        </div>
    );
}

export default FeaturedFramework;