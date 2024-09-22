"use client";
import {useState,FormEvent} from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function Contact() {
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')

  const handleSubmit=(e : FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log('Submitted:', { email, message });
  }

  return (
    <div className="min-h-screen w-full rounded-md bg-gray-100 dark:bg-gray-900 relative flex flex-col items-center justify-center antialiased">
      <div className="mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4 mt-4">
          <input
            type="email"
            placeholder="write your email here"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 my-3 p-4 bg-neutral-950 placeholder:text-neutral-700"
           
          />

          <textarea 
            placeholder="your message"
            value={message}
            onChange={e=>setMessage(e.target.value)}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 my-3 p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
            ></textarea>
          
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>

        </form>
      </div>
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0"/>
    </div>
  )
}

export default Contact
