import React from 'react'
import { dela } from '../fonts'
import Link from 'next/link'

// type Props = {}

const Intro = () => {
  return (
    <div>
        <div className={`m-10 tracking-wider text-xs sm:text-[36px] ${dela.className}`}>About the page...</div>
        <div className='m-10 text-xs'>This simple app helps you quickly and easily find new exercises for your strength workouts. Just pick a muscle group, and the equipment available to you, and it will generate a list of exercises. The app queries the wger exercise database REST API - you can find more information <Link className='text-blue-300	' href="https://wger.de/en-au/software/api">here.</Link></div>
    </div>
  )
}

export default Intro