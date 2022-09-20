import React from 'react';
import styles from '../styles/Home.module.css';

const LiftedButton = ({ name, svg, onClick }) => {
    return (
        <button id={styles.softBounce} onClick={onClick} className="inline-flex text-lg font-bold tracking-wide items-center bg-blue-500 py-1 px-3 focus:outline-none hover:bg-[#fafafa] rounded-lg text-white hover:text-blue-500 mt-4 md:mt-0 border-solid border-[3px] border-black shadow-black shadow-[-2px_2px_0px] hover:shadow-black hover:shadow-[-4px_4px_0px] transition-[200ms]">
            {name}
            {svg &&
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            }
        </button>
    );
}

export default LiftedButton;