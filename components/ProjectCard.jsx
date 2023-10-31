import React, { useState } from "react";
import Image from "next/image";
import LiftedButton from "./LiftedButton";
import styles from "../styles/Home.module.css";

const ProjectCard = ({ projectInfo }) => {
    const [moreInfo, setMoreInfo] = useState(false);
    const [disclaimerOpen, setDisclaimerOpen] = useState({
        acquired: false,
        proprietary: false
    });

    const {
        image,
        name,
        briefDescription,
        fullDescription,
        builtWith,
        logos,
        acquired,
        githubLink,
        websiteLink,
        proprietary } = projectInfo;

    const handleDisclaimer = (type) => {
        const { acquired, proprietary } = disclaimerOpen;

        if (type === 'acquired') {

            setDisclaimerOpen({ proprietary: false, acquired: !acquired });

        } else if (type === 'proprietary') {

            setDisclaimerOpen({ acquired: false, proprietary: !proprietary });

        }
    }

    return (
        <div id={styles.projectCard} className="bg-[#fafafa] w-full mx-5 my-10 min-h-[50rem] min-w-[300px] max-w-[1000px] flex flex-col justify-between items-center rounded-[15px] shadow-black shadow-[-8px_5px_0px] hover:shadow-black hover:shadow-[-8px_13px_2px] border-black border-8 duration-300 hover:border-black relative">
            <div className="bg-black w-full ml-0.5 p-0 shadow-black shadow-[-2px_-1px_0px] border-black border-[0px_0px_2px_0px]">
                <img
                    loading="lazy"
                    className="rounded-[8px_10px_0px_0px] w-full h-full min-h-[300px] max-h-[1000px]"
                    alt={name} src={image} />
            </div>
            <div className="flex flex-col w-full h-full min-h-[20em] justify-between items-center">
                <div className={`flex flex-row w-full justify-end items-center relative  ${name === 'Nissan Canada' && 'mt-5'}`}>
                    {acquired &&
                        <>
                            <LiftedButton
                                name="Acquired"
                                svg={true}
                                onClick={() => handleDisclaimer('acquired')}
                                className="bg-green-500 hover:text-green-500 hover:border-green-500 font-bold text-base mr-5" />
                            {disclaimerOpen.acquired &&
                                <div className='absolute mt-10 w-[250px] z-50 bg-white top-0 rounded-lg border-black border-2 shadow-lg p-5'>
                                    <span className="flex flex-row w-full h-min justify-end text-black pointer-cursor">
                                        <button className="absolute top-2 right-2 cursor-pointer w-min h-min rounded-lg hover:-rotate-12" onClick={() => handleDisclaimer('acquired')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </span>
                                    <p className="text-lg text-left text-black font-extrabold">
                                        Acquisition Notice:
                                    </p>
                                    <p className="text-left text-sm text-black mt-2">
                                        This project was undertaken during my ownership with Keycaana, which has since been acquired. Due to this transition and associated agreements, certain details or access to the full scope of the project may be restricted.
                                    </p>
                                </div>
                            }
                        </>
                    }
                    {!proprietary &&
                        <>
                            <LiftedButton
                                name="Proprietary"
                                svg={true}
                                onClick={() => handleDisclaimer('proprietary')}
                                className="bg-green-500 hover:text-green-500 hover:border-green-500 font-bold text-base mr-5" />
                            {disclaimerOpen.proprietary &&
                                <div className='absolute mt-10 w-[250px] z-50 bg-white top-0 rounded-lg border-black border-2 shadow-lg p-5'>
                                    <span className="flex flex-row w-full h-min justify-end text-black pointer-cursor">
                                        <button className="absolute top-2 right-2 cursor-pointer w-min h-min rounded-lg hover:-rotate-12" onClick={() => handleDisclaimer('proprietary')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </span>
                                    <p className="text-left text-lg text-black font-extrabold">
                                        Proprietary Code Notice:
                                    </p>
                                    <p className="text-left text-sm mt-2 text-black">
                                        This is a proprietary project for Nissan/Infiniti Canada. Due to confidentiality agreements, the source code for this project is not publicly available. However, a detailed description and functionalities are provided above.
                                    </p>
                                </div>
                            }
                        </>
                    }
                </div>
                <div className="flex flex-row w-full justify-center items-center">
                    <h1 className="text-center text-black font-semibold text-[32px] py-3">{name}</h1>
                </div>
                <div className="w-full h-full">
                    <p className="text-black font-semibold text-center px-5">{briefDescription}</p>
                </div>
                {moreInfo ?
                    <div className="h-full">
                        <p className="text-black font-semibold text-center pt-5 px-5">{fullDescription}</p>
                        <LiftedButton
                            name="Less Info"
                            svg={false}
                            onClick={() => setMoreInfo(false)}
                            className="bg-blue-500 hover:text-blue-500 hover:border-blue-500 font-bold text-lg mr-5" />
                    </div>
                    :
                    <LiftedButton
                        name="More Info"
                        svg={false}
                        onClick={() => setMoreInfo(true)}
                        className="bg-blue-500 hover:text-blue-500 hover:border-blue-500 font-bold text-lg mr-5" />
                }
                <div className={`flex flex-row justify-between w-full -mb-3 px-10`}>
                    {/* Used anchor tags to enable the "open in new tab" functionality, Next/Link does not allow this.*/}
                    {githubLink &&
                        <a className="cursor-pointer mt-5" href={`${githubLink}`}>
                            <Image width={40} height={40} alt="Github Link" src="/github-black.svg" />
                        </a>
                    }
                    {websiteLink &&
                        <a className="cursor-pointer mt-5" href={`${websiteLink}`}>
                            <Image width={40} height={40} alt="Website Link" src="/website.svg" />
                        </a>
                    }
                </div>

            </div>
            <div className="w-full flex flex-col justify-end items-center top-10 my-5 border-t-4 border-black">
                <p className="text-center text-black py-2 font-bold">{builtWith}</p>
                <div className="w-full flex flex-row justify-evenly">
                    {logos.map((value, key) => {
                        return (
                            <Image key={key} alt={value} loading="lazy" width={50} height={50} src={value} />
                        );
                    })}
                </div>
            </div>
            {(disclaimerOpen.acquired || disclaimerOpen.proprietary)
                &&
                <div className="absolute w-full h-full min-w-[300px] max-w-[1000px] rounded-lg bg-black opacity-70 z-40 pointer-events-none"></div>
            }
        </div>
    );
}

export default ProjectCard;