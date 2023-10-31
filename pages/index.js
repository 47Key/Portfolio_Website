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
      name: "Nissan Canada",
      acquired: false,
      briefDescription: "This application, developed using React, Typescript, Next.js, and TailwindCSS, showcases the latest features and specifications of Nissan and Infiniti's new vehicle lineup for Canada. Users are directed here from the Nissan Canada website for detailed information on specific vehicles.",
      fullDescription: "Through this project, I deepened my expertise in React, Typescript, Next.js, and TailwindCSS. The project's complexity in all aspects honed my problem-solving skills and adaptability. I also garnered invaluable experience navigating the intricacies of collaborating within a large corporate framework, emphasizing the importance of clear communication and alignment in a diverse team setting.",
      image: "./nissanproject.png",
      builtWith: "ReactJS, Typescript, Next.js, TailwindCSS, Vercel",
      logos: ["/reactjs.svg", "/typescript.svg", "/nextjs.svg", "/tailwindcss.svg"],
      githubLink: false,
      websiteLink: "https://nissan-specs.vercel.app",
      proprietary: false,
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
      proprietary: false,
    },
    {
      name: "Portfolio Website",
      acquired: false,
      briefDescription: "This is my portfolio website, it displays all of the projects I have worked on, and houses my resume as well as a channel for contact by using Twilio SendGrid. It taught me alot about UI/UX & Design implementations, as well as the file system module from NodeJS.",
      fullDescription: "The UI/UX, Design, and Code implementation was done entirely by myself. This website was reactjs typescript.svgo, s built typescript.svgon a nextjs.svgbase, using TacssilwindCSS simplicity and speed for styling. There is some custom CSS done in the 'Home.module.css' file as well for css properties that were out of reach of Tailwind. It incorporates Sendgrid from Twilio into the contact form, to send a direct email to my personal account whenever someone fills out the form.",
      image: "./portfolio.png",
      builtWith: "ReactJS, TailwindCSS, NextJS, Twilio",
      logos: ["/reactjs.svg", "/tailwindcss.svg", "/nextjs.svg", "/twilio.svg"],
      githubLink: "https://github.com/47Key/Portfolio_Website",
      websiteLink: "/",
      proprietary: false,
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
      proprietary: false,
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
