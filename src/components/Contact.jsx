import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-full w-full bg-[#0a192f]"
    >
      <form
        method="POST"
        action="https://getform.io/f/1f2bd323-68d8-45ab-a763-fc7159b7e9de"
        className="w-full h-full max-w-[600px] mx-auto p-8 flex flex-col justify-center"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact Me
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email <br />
            Karenauskas@gmail.com
          </p>
        </div>
        <input
          className="bg-[#6a6f81] p-2"
          type="text"
          placeholder="Your Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#6a6f81]"
          type="email"
          placeholder="Your Email"
          name="email"
        />
        <textarea
          className="bg-[#6a6f81] p-2"
          name="message"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Work
        </button>
      </form>
    </div>
  );
};

export default Contact;
