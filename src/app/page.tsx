"use client"

import { useState, SetStateAction, Link } from 'react'
import Exercises from './components/Exercises'
import SearchExercise from './components/SearchExercise'
import Intro from './components/Intro'
import { dela } from './fonts'


export default function Home() {

  const [apiRes, setApiRes] = useState<object[]>([])
  const [urlMuscle, setUrlMuscle] = useState<SetStateAction<number>>()
  const [urlEquipment, setUrlEquipment] = useState<SetStateAction<number>>()

  // useEffect(() => {
  //   fetch(`https://wger.de/api/v2/exercise/?muscles=2&equipment=3&language=2`)
  // .then(response => response.json())
  // .then(data => {
  //   setApiRes(data.results)
  //   console.log("ran")
  // });
  // },[])

  function fetchResults(){
    fetch(`https://wger.de/api/v2/exercise/?muscles=${urlMuscle}&equipment=${urlEquipment}&language=2`)
  .then(response => response.json())
  .then(data => {
    const newResponse = data.results
    setApiRes(newResponse)
    console.log("fetched")
  });
  }

  return (
    <main className=" bg-gradient-to-r from-violet-800 to-fuchsia-600 flex flex-col justify-center min-h-screen p-2 sm:p-16 ">
      <div className='flex flex-col bg-black'>
        <Intro />
        <SearchExercise setUrlMuscle={setUrlMuscle} setUrlEquipment={setUrlEquipment} fetchResults={fetchResults} />
        <Exercises apiRes={apiRes}/> 
      </div >
      <footer className={`flex tracking-wider text-xs sm:text-s justify-center  pt-20 ${dela.className}`}>Design by Jack Mangelsdorf</footer>
    </main>
  )
}
