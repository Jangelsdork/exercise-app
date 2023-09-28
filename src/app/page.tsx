"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Exercises from './components/Exercises'

export default function Home() {

  const [apiRes, setApiRes] = useState<object[]>([])

  useEffect(() => {
    fetch("https://wger.de/api/v2/exercise/?muscles=4&equipment=3&language=2")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0])
    setApiRes(data.results)
  });
  },[])

  return (
    <main>
      <div>
        <Exercises apiRes={apiRes}/> 
      </div>
    </main>
  )
}
