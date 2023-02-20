import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  return (
    <section className='App'>
        <TwitterFollowCard userName="kikobeats" name="Kiko Beats"/>
        <TwitterFollowCard userName="goku" name="Goku"/>
        <TwitterFollowCard userName="MonkeyDLuffyZZ" name="Luffy"/>
    </section>
  )
}


