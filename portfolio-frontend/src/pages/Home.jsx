import React from 'react'
import Card from '../components/card'
import headshot from '../assets/headshot.png'

export default function Home() {
  return (
    <div>
      <Card
      cardStyle="card"
      picture = {headshot}
      pictureText = "Rocco's Headshot"
      cardText={"Hello Friends"}/>
      <div>
        <button onClick={()=>{console.log('Button works')}}>
          Click Me
        </button>
      </div>
    </div>
  )
}
