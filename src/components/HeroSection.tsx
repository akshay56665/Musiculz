import Link from "next/link"
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div className="h-full md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative
    overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white"/>

        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bolf bg-clip-text text-transparent bg-gradient-to-b 
        from-neutral-50 to-neutral-400">
            Master the art of Music
        </h1>
        
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Dive into our comprehensive music courses and transform your musical journey today.
            Whether you're a beginner or looking to refine your skills,join us to unlock your true potential. 
        </p>
      </div>

      <div className="mt-4">
        <Link href={'/courses'}>
          <Button
            borderRadius="1.75rem"
            className=" dark:bg-transparent  dark:text-white dark:border-transparent"
          >
            Explore us
          </Button>
        </Link>
      </div>
    </div>
  )
}