import Head from 'next/head';
import Navbar from '../containers/Navbar.jsx';
import Hero from '../containers/Hero.jsx';
import Projects from '../containers/Projects.jsx';
import Footer from '../containers/Footer.jsx';
import styles from '../styles/Home.module.css';
import FeaturedFramework from '../containers/FeaturedFramework.jsx';
import About from '../containers/About.jsx';
import Contact from '../containers/Contact.jsx';


export async function getStaticProps() {
  const projectDescriptionArr = [
    {
      name: "AI Image Generator",
      acquired: false,
      briefDescription: "A web application built to integrate with the RESTful API that is mentioned in the next project. It accepts a user's input and sends it to the RESTful API, which then returns an image that is available to view & download.",
      fullDescription: "This website taught me the importance of Typescript & static types, I learned alot about remote file downloads by using NodeJS buffers to stream the byte data from a remote source (RESTful API), this way I can bypass the browser security measures for the client to download their generated image. I also advanced my knowledge of UI/UX & design implementation, and was proud of the final outcome. I have been mystified by Artificial Intelligence for a long time, and it was satisfying to be able to work on a project like this.",
      image: "./image-generation.png",
      builtWith: "Typescript, TailwindCSS, ReactJS, NextJS",
      logos: ["/typescript.svg", "/tailwindcss.svg", "/reactjs.svg", "/nextjs.svg"],
      githubLink: "https://github.com/47Key/AI_Image_Generator",
      websiteLink: "https://keyai.ca",
    },
    {
      name: "AI Image Generation REST-API",
      acquired: false,
      briefDescription: "A RESTful API built using the StabilityAI SDK. It generates an image from a user input, by processing the text input through a stable diffusion AI model. This was built with Flask & Python, and deployed with Docker on AWS.",
      fullDescription: "This project was a fantastic learning experience, I acquired more knowledge in Docker & AWS, as well as obtained more experience with Flask & Python. I further increased my understanding of REST API's, HTTP protocols, and server deployment.",
      image: "./artificial-intelligence.svg",
      builtWith: "Python, Flask, Docker, AWS",
      logos: ["/python.svg", "/flask.svg", "/docker.svg", "/aws.svg"],
      githubLink: "https://github.com/47Key/stable-diffusion_api-docker",
      websiteLink: false,
    },
    {
      name: "Portfolio Website",
      acquired: false,
      briefDescription: "This is my portfolio website, it displays all of the projects I have worked on, and houses my resume as well as a channel for contact by using Twilio SendGrid. It taught me alot about UI/UX & Design implementations, as well as the file system module from NodeJS.",
      fullDescription: "The UI/UX, Design, and Code implementation was done entirely by myself. This website was built using React on a Next.js base, using TailwindCSS for its simplicity and speed for styling. There is some custom CSS done in the 'Home.module.css' file as well for css properties that were out of reach of Tailwind. It incorporates Sendgrid from Twilio into the contact form, to send a direct email to my personal account whenever someone fills out the form.",
      image: "./portfolio.png",
      builtWith: "ReactJS, TailwindCSS, NextJS, Twilio",
      logos: ["/reactjs.svg", "/tailwindcss.svg", "/nextjs.svg", "/twilio.svg"],
      githubLink: "https://github.com/47Key/Portfolio_Website",
      websiteLink: "/",
    },
    {
      name: "Real Estate Application",
      acquired: false,
      briefDescription: "Integrated real-time real estate data into a SSG/SSR web application with UI/UX in mind. I chose these technologies due to the vast amount of data to be rendered on the site. I wanted the option between static generated content for the main page, and server-side rendering for the rest.",
      fullDescription: "This project was integrated with the RETS Client mentioned below, it queries the company database to update the active property data twice per day, preventing any out-dated information from being displayed on the website. I learned the importance of RETS (Real Estate Transaction Standards) in the real estate space. When developing this website, I gained a better understanding of the importance of UI/UX & how to make user navigation seamless in our application.",
      image: "./team-forcier.png",
      builtWith: "ReactJS, NextJS, Firebase, Vercel",
      logos: ["/reactjs.svg", "/nextjs.svg", "/firebase.svg", "/vercel.svg" ],
      githubLink: "https://github.com/47Key/team_forcier",
      websiteLink: "https://team-forcier.vercel.app/",
    },
    {
      name: "RETS Client",
      acquired: false,
      briefDescription: "This is a REST API, built with ExpressJS and was deployed with Firebase Cloud Functions. It queries the Canadian DDF Server (RETS/Real Estate Transaction Standards) to update active property data, and stores it in a no-SQL Database.",
      fullDescription: "This project was a fantastic learning experience, looking through the query processes of alternative tools like PHRETS, and other RETS clients, to better understand the Real Estate Transaction Standards (RETS) & Data Distribution Facility (DDF) protocols.",
      image: "./crea-ddf1.png",
      builtWith: "Javascript, NodeJS, ExpressJS, Firebase Cloud Functions",
      logos: ["/js.svg", "/nodejs.svg", "/express.svg", "/firebase.svg"],
      githubLink: "https://github.com/47Key/ddf_client_cloudfunction",
      websiteLink: false,
    },
    {
      name: "Key Canna",
      acquired: true,
      briefDescription: "This company was acquired in mid-late 2022. It is a B2B company focused in the Tele-Health industry. It encompassed the HIPAA compliant EMR (Electronic Medical Records) software that was built by our team, regrettably this project was not open-source.",
      fullDescription: "Lead a team of 4 employees, including 3 Nurse Practitioners & 1 Security Engineer. The leadership & Software Engineering skills developed in this role were critical for my career development. Starting this company taught me a vast amount about working on a software project, and bolstered my development of leadership skills. I learned how to organize and implement new features, and how to structure a project with my team's needs in mind. I learned the importance of continuous-integration/continuous-development & version control in a team based environment.",
      image: "./key-canna.png",
      builtWith: "ElectronJS, ReactJS, NodeJS, PostgreSQL",
      logos: ["/electronjs.svg", "/reactjs.svg", "/nodejs.svg", "/postgres.svg"], 
      githubLink: false,
      websiteLink: false,
    },
];
  return {
    props: {
      projects: projectDescriptionArr,
    }
  }
}

export default function Home({ projects }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Key the Dev</title>
        <meta name="description" content="Ryley Keegan's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
      </Head>
      
      <Navbar />
      <Hero />
      <About />
      <FeaturedFramework />
      <Projects projects={projects} />
      <Contact />
      <Footer />

    </div>
  )
}
