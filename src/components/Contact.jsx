import React from "react";
import Header from "./Header";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { useEffect, useState } from "react"; // استيراد useEffect و useState

function Contact() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  if (!data) return <p className="text-center p-10">Loading...</p>;

  const { location, phone, email } = data.contact;

  return (
    <div>
      <div className="md:px-10 sm:px-15 px-5 pb-10">
        <div id="contact" className="max-w-5xl mx-auto">
          <Header title={"contact"} subtitle={"Get in Touch with Me!"} />
          <div className="p-5 bg-gray-100 rounded-2xl flex flex-col gap-5 mb-10">
            <div className="flex items-center gap-3">
              <IoLocationOutline className="text-2xl text-black" />
              <div className="flex flex-col">
                <p className="font-semibold">Location:</p>
                <p className="text-gray-500">{location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CiPhone className="text-2xl text-black" />
              <div className="flex flex-col">
                <p className="font-semibold">Contact Number:</p>
                <p className="text-gray-500">{phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CiMail className="text-2xl text-black" />
              <div className="flex flex-col">
                <p className="font-semibold">Email:</p>
                <p className="text-gray-500">{email}</p>
              </div>
            </div>
          </div>
          <form action="https://formspree.io/f/{form_id}" method="post">
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className=" text-gray-500">Name</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-500">Email</label>
                  <input
                    type="email"
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className=" text-gray-500">Message</label>
                <textarea
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm min-h-[120px] resize-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submet"
                className="flex items-center justify-center sm:justify-start gap-2 p-3 bg-black text-white text-[12px] font-medium cursor-pointer rounded-lg transition-all duration-300 hover:bg-white hover:text-black border border-gray-500 self-stretch sm:self-start"
              >
                Send message <CiMail />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
