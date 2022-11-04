import React from 'react'

export default function Users({heroName}) {
    if(heroName === "joker"){
        throw new Error("Not a hero at all")
    }
  return (
    <div>
        <h1>US</h1>
        {heroName}
    </div>
  )
}
