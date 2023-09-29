"use client"

import { useEffect, useState, SetStateAction } from 'react'
import Exercises from './components/Exercises'
import SearchExercise from './components/SearchExercise'

export default function Home() {

  const [apiRes, setApiRes] = useState<object[]>([])
  const [urlMuscle, setUrlMuscle] = useState<SetStateAction<number>>()
  const [urlEquipment, setUrlEquipment] = useState<SetStateAction<number>>()

  useEffect(() => {
    fetch(`https://wger.de/api/v2/exercise/?muscles=2&equipment=3&language=2`)
  .then(response => response.json())
  .then(data => {
    setApiRes(data.results)
    console.log("ran")
  });
  },[])

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
    <main className=" bg-gradient-to-r from-violet-800 to-fuchsia-600 flex justify-center min-h-screen p-16">
      <div className='flex flex-col bg-black'>
        <SearchExercise setUrlMuscle={setUrlMuscle} setUrlEquipment={setUrlEquipment} fetchResults={fetchResults} />
        <Exercises apiRes={apiRes}/> 
      </div>
    </main>
  )
}
