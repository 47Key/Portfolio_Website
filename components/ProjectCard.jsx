import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import LiftedButton from "./LiftedButton";

const ProjectCard = ({ image, projectName, briefDescription, fullDescription, builtWith, logos, acquired, githubLink, websiteLink }) => {
    const [moreInfo, setMoreInfo] = useState(false);

    return (
        <div id={styles.projectCard} className="bg-[#fafafa] w-[400px] mx-5 my-10 min-h-[50em] min-w-[300px] max-w-[400px] flex flex-col justify-between items-center rounded-[15px] shadow-black shadow-[-8px_5px_0px] hover:shadow-black hover:shadow-[-8px_13px_2px] border-black border-8 duration-300 hover:border-black">
            <div className="bg-black w-full ml-0.5 p-0 shadow-black shadow-[-2px_-1px_0px] border-black border-[0px_0px_2px_0px]">
                <img
                loading="lazy" 
                className="rounded-[8px_10px_0px_0px] 
                w-full h-[300px]" 
                alt={projectName} src={image} />
            </div>
            <div className="flex flex-col w-full h-full min-h-[20em] justify-between items-center">
                <div className="flex flex-row w-full justify-center items-center">
                    <h1 className="text-center text-black font-semibold text-[32px] py-3">{projectName}</h1>
                    {acquired ?
                        <div id={styles.projectCardAcquired} className="bg-green-500 justify-center p-2 rounded-xl items-center text-center relative left-10">
                            <p className="text-white">Acquired</p>
                        </div>
                        : 
                        <p></p>
                    }
                </div>
                <p className="text-black font-semibold text-center px-5">{briefDescription}</p>
                {moreInfo ?
                <div className="h-full">
                    <p className="text-black font-semibold text-center pt-5 px-5">{fullDescription}</p>
                    <LiftedButton onClick={() => setMoreInfo(false)} name="Less Info" svg={false} />
                </div>
                    :
                    <LiftedButton onClick={() => setMoreInfo(true)} name="More Info" svg={false} />
                }
                <div className="flex flex-row justify-between w-full -mb-3 px-10">
                    {githubLink &&
                        <Link href={`${githubLink}`}>
                            <img className="w-10 mt-5 cursor-pointer" alt="Github Link" src="github-black.svg" />
                        </Link>
                    }
                    {websiteLink &&
                        <Link href={`${websiteLink}`}>
                            <img className="w-10 mt-5 cursor-pointer" alt="Website Link" src="website.svg" />
                        </Link>
                    }
                </div>

            </div>
            <div className="w-full flex flex-col justify-end items-center top-10 my-5 border-t-4 border-black">
                <p className="text-center text-black py-2 font-bold">{builtWith}</p>
                <div className="w-full flex flex-row justify-evenly">
                    {logos.map((value, key) => {
                        return (
                            <img key={key} alt={value} loading="lazy" className="w-[50px] h-[50px]" src={value}/>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;