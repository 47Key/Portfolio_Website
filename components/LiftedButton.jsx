import React from 'react';
import styles from '../styles/Home.module.css';

const LiftedButton = ({ name, svg, onClick, className }) => {
    return (
        <button id={styles.softBounce} onClick={onClick} className={`${className} inline-flex items-center py-1 px-3 focus:outline-none hover:bg-[#fafafa] rounded-md text-white mt-4 md:mt-0 transition-[200ms] hover:border-2`}>
            {name}
            {svg &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="ml-2 w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            }
        </button>
    );
}

export default LiftedButton;