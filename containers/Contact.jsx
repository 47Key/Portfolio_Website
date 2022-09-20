import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { MdPerson, MdPhone, MdEmail } from "react-icons/md";
import LiftedButton from "../components/LiftedButton";


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      
      setSubmitted(true);
      
      const data = {
        email: event.target.email.value,
        first: event.target.fname.value,
        last: event.target.lname.value,
        phone: event.target.phone.value,
      }
       
      const res = await fetch("/api/SendEmail", {
        body: JSON.stringify(data),
        method: "POST",
      });  
    } catch (error) {
      console.log(error);
    }
  };
  
    return (
        <div id={styles.contactForm} className="w-screen text-black bg-mainBlue font-main shadow-black shadow-[0px_8px_5px] z-20">
            <div id="contact" className="max-w-screen-xl px-4 py-36 mx-auto sm:px-6 lg:px-8">
              <div id={styles.contactCard} className=" w-full mx-auto bg-[#fafafa] pt-10 -mt-10 rounded-[20px] shadow-black shadow-[-8px_5px_0px] hover:shadow-black hover:shadow-[-8px_13px_2px] border-black border-8 duration-300">
                <h1 className="font-extrabold text-5xl text-center bg-[#fafafa]">Reach out to me</h1>

                <form onSubmit={handleSubmit} className="p-8 mt-6 mb-0 bg-[#fafafa] space-y-4 rounded-lg shadow-2xl flex flex-col">
                  <div id={styles.formInputWrapper} className="flex flex-row justify-evenly items-center">
                    <div id={styles.formColumn} className="flex flex-col w-full px-2">
                      <div className="py-5">
                        <label htmlFor="fname" className="text-lg font-bold">First Name</label>
                        <div className="w-full h-full flex justify-center items-center p-0.5 bg-black rounded-xl">
                          <div className="relative w-full">
                            <input
                              required
                              type="string"
                              id="fname"
                              className="w-full p-4 pr-12 text-sm border-gray-200 bg-white rounded-[10px] shadow-lg"
                              placeholder="Enter First Name"
                            />
                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                            <MdPerson />
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="py-5">
                        <label htmlFor="lname" className="text-lg font-bold">Last Name</label>
                        <div className="w-full h-full flex justify-center items-center p-0.5 bg-black rounded-xl">
                          <div className="relative w-full">
                            <input
                              required
                              type="string"
                              id="lname"
                              className="w-full p-4 pr-12 text-sm border-gray-200 bg-white rounded-[10px] shadow-lg"
                              placeholder="Enter Last Name"
                            />
                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                              <MdPerson />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id={styles.formColumn} className="flex flex-col px-2 w-full">
                      <div className="py-5">
                        <label htmlFor="phone" className="text-lg font-bold">Phone Number</label>
                        <div className="w-full h-full flex justify-center items-center p-0.5 bg-black rounded-xl">
                          <div className="relative w-full">
                            <input
                              required
                              type="integer"
                              id="phone"
                              className="w-full p-4 pr-12 text-sm border-gray-200 bg-white rounded-[10px] shadow-lg"
                              placeholder="Enter phone number"
                            />
                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                            <MdPhone />
                            </span>
                          </div>
                      </div>
                    </div>

                      <div className="py-5">
                        <label htmlFor="email" className="text-lg font-bold">Email</label>
                        <div className="w-full h-full flex justify-center items-center p-0.5 bg-black rounded-xl">
                          <div className="relative w-full">
                            <input
                              required
                              type="email"
                              id="email"
                              className="w-full p-4 pr-12 text-sm border-gray-200 bg-white rounded-[10px] shadow-lg"
                              placeholder="Enter email"
                            />
                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                              <MdEmail />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-row items-center justify-center">
                    <LiftedButton name="Submit" type="submit"/>
                  </div>
                </form>

                {submitted ? 
                  <div className="flex flex-row justify-center items-center bg-mainBlue rounded-[0px_0px_10px_10px] bg-opacity-20 text-white p-2">
                    <h1>Thank you for submitting, I will be in contact shortly.</h1>
                  </div>
                  :
                  <p></p>
                }
              </div>
            </div>
        </div>
    );
}

export default Contact;
