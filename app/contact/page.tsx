"use client";
import Image from "next/image";
import { createPost } from "@/app/contact/actions";
import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const result = await createPost(formData);

    console.log(result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full max-w-7xl justify-center">
        
          <div className="relative w-full sm:w-1/2 h-48 sm:h-auto order-1 sm:order-last">
            <Image
              src="/contact.svg"
              alt="Contact Image"
              width={500}
              height={300}
              className="object-cover w-full h-auto rounded-lg z-10 relative -z-1"
              priority
            />
         
        </div>

        <form
          className="bg-white rounded-lg p-6 w-full max-w-md order-2 sm:order-first"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
