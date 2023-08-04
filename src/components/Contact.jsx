"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    try {
      const res = await axios.post("http://localhost:3000/api/contact", {
        ...formData,
      });

      console.log(res.data);
      if (res.status == 200) {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-5xl text-center mt-16">Contact Us</h1>
      <div
        id="contact"
        className="flex flex-col md:flex-row shadow-2xl rounded-3xl bg-base-200 m-6 md:m-12 mb-28"
      >
        <div className="md:w-2/4 w-full">
          <Image
            src={"/images/contact.svg"}
            width={500}
            height={500}
            alt="image"
            className="w-full md:rounded-l-3xl object-cover h-full"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="form-control p-10 space-y-6 md:w-2/4 w-full"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-primary w-full"
          />
          <input
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input input-primary w-full"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-primary w-full"
          />
          <textarea
            rows={"3"}
            type="text"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-primary w-full"
          />
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
