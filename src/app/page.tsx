"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Exercises from './components/Exercises'
import SearchExercise from './components/SearchExercise'

export default function Home() {

  const [apiRes, setApiRes] = useState<object[]>([])

  useEffect(() => {
    fetch("https://wger.de/api/v2/exercise/?muscles=2&equipment=3&language=2")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0])
    setApiRes(data.results)
  });
  },[])

  return (
    <main className=" bg-gradient-to-r from-violet-800 to-fuchsia-600 flex justify-center p-16">
      <div className='flex flex-col bg-black'>
        <SearchExercise />
        <Exercises apiRes={apiRes}/> 
      </div>
    </main>
  )
}
