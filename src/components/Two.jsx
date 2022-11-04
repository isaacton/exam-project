import React from 'react'

export default function Two({heroName}) {
    if(heroName === "joker"){
        throw new Error("Not a hero at all")
    }
  return (
    <div>
        <h1>Two</h1>
        {heroName}
    </div>
  )
}
