"use client"
import Link from 'next/link'
import React from 'react'
import CourseData from '@/data/music_record.json'
import { BackgroundGradient } from "./ui/background-gradient";

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}
const FeaturedCourses = () => {
    const featured_courses=CourseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div className="text-center">
        <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white'>Learn with the best</p>
      </div>

      <div className='my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
        {featured_courses.map((course:Course)=>(
            <div className="flex justify-center">
                <BackgroundGradient className="overflow-hidden h-full rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <div key={course.id} className='text-center p-4 sm:p-6 items-center flex flex-col flex-grow'>
                        <p className='mt-4 mb-2 text-lg sm:text-xl text-black dark:text-neutral-200'>{course.title}</p>
                        <p className='mb-3 text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                        <Link href={'#'} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100
                        transtion duration-200'>
                            View more
                        </Link>
                    </div>
                </BackgroundGradient>
            </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link href={'/courses'} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100
        transtion duration-200'>
            View all courses
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
