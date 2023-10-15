"use client"

import {useEffect, useState} from 'react'	

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3001/api/home").then(
      res => res.json()
    ).then(data => {
      console.log(data)
    })
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello World</p>
    </main>
  )
}
