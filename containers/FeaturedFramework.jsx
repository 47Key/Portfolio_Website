import React from "react";
import FrameworkLogo from "../components/FrameworkLogo";
import styles from "../styles/Home.module.css";
const FeaturedFramework = () => {
    return (
        <div className="bg-[#065ae1] w-full flex flex-col items-center justify-center -mt-2">
            <div id={styles.featuredFramework} className="flex w-full h-full justify-center align-baseline items-center flex-row max-w-[1000px]">
                <FrameworkLogo name="React JS" logo="./reactjs.svg" />
                <FrameworkLogo name="Tailwind CSS" logo="./tailwindcss.svg" />
                <FrameworkLogo name="Next JS" logo="./nextjs.svg" />
                <FrameworkLogo name="Node JS" logo="./nodejs.svg" />
                <FrameworkLogo name="PHP" logo="./php.svg" />
                <FrameworkLogo name="Python" logo="./python.svg" />
                <FrameworkLogo name="FastAPI" logo="./fastapi.svg" />
                <FrameworkLogo name="Tensorflow" logo="./tensorflow.svg" />
                <FrameworkLogo name="PyTorch" logo="./pytorch.svg" />
                <FrameworkLogo name="Flask" logo="./flask.svg" />
                <FrameworkLogo name="MySQL" logo="./mysql.svg" />
                <FrameworkLogo name="GIT" logo="./git.svg" />
                <FrameworkLogo name="Docker" logo="./docker.svg" />
                <FrameworkLogo name="AWS" logo="./aws.svg" />            
            </div>
        </div>
    );
}

export default FeaturedFramework;