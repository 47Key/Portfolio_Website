import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css';
import { HiRefresh } from 'react-icons/hi';

const Hero = () => {
    const [pos, setPos] = useState(0);
    const alternatingDescription = ["LOVES TO CODE", "IS ALWAYS LEARNING", "IS DEDICATED", "ENJOYS BEING A FATHER"];

  useEffect(() => {
    if (pos > (alternatingDescription.length - 1)) {
        setPos(0);
    }
  }, [pos]);
    return (
        <div id={styles.svgTransition}>
            <div id={styles.heroText} className="text-center pt-10 px-2">
                <div id={styles.softBounce}>
                  <h1>RYLEY</h1>
                  <h1>KEEGAN</h1>
                  <h2>{alternatingDescription[pos]}</h2>
                </div>
                <button onClick={() => setPos(pos + 1)} className="inline-flex items-center bg-blue-500 border-solid border-[2px] border-black py-1 mt-5 p-2 focus:outline-none hover:bg-[#fafafa] rounded-full text-white hover:text-blue-500 text-base shadow-black shadow-[-3px_2px_0px] hover:shadow-black hover:shadow-[-4px_4px_0px] transition-[200ms]">
                  <HiRefresh size={30} />
                </button>
            </div>
        </div>
    );
}

export default Hero;