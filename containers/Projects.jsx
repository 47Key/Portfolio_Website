import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Home.module.css';

const Projects = ({ projects }) => {
    return (
        <div loading="lazy" id={styles.svgTransitionPeaks} className="w-screen flex-col my-5 columns-3 flex justify-center text-center font-['Roboto']">
            <div id="projects" className="container mx-auto flex flex-col mt-20">
                <h1 id={styles.projectText} className="text-white font-bold text-center pt-10">PROJECTS</h1>
            </div>
            <div className="flex flex-row flex-wrap w-full h-full justify-center align-baseline items-center font-main">
                {projects.map((project, key) => {
                    return (
                        <ProjectCard key={key} projectInfo={project} />
                    );
                })
                }
            </div>
        </div>
    );
}

export default Projects;