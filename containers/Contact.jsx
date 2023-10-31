import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { MdPerson, MdPhone, MdEmail } from "react-icons/md";
import LiftedButton from "../components/LiftedButton";


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {

  //     setSubmitted(true);

  //     const data = {
  //       email: event.target.email.value,
  //       first: event.target.fname.value,
  //       last: event.target.lname.value,
  //       phone: event.target.phone.value,
  //     }

  //     const res = await fetch("/api/SendEmail", {
  //       body: JSON.stringify(data),
  //       method: "POST",
  //     });  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div id={styles.contactForm} className="w-full min-w-[300px] max-w-[1000px] text-black bg-mainBlue font-main shadow-black shadow-[0px_8px_5px] z-20">
      <div id="contact" className="max-w-screen-xl px-4 py-36 mx-auto sm:px-6 lg:px-8">
        <div id={styles.contactCard} className=" w-full mx-auto bg-[#fafafa] pt-10 -mt-10 rounded-[20px] shadow-black shadow-[-8px_5px_0px] hover:shadow-black hover:shadow-[-8px_13px_2px] border-black border-8 duration-300">
          <h1 className="font-extrabold text-5xl text-center bg-[#fafafa]">Contact</h1>
          <div className="w-full h-full flex flex-col items-center justify-center p-10">
            <p>To contact me or view a copy of my resume, please reach out to <a className='font-extrabold text-blue-700 hover:underline' href="ryleykeegan47@gmail.com">ryleykeegan47@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
