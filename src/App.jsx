import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  return (
    <section className='App'>
        <TwitterFollowCard userName="kikobeats" name="Kiko Beats">
          Kiko Beats
        </TwitterFollowCard>
        <TwitterFollowCard userName="goku" name="Goku">
         Goku
        </TwitterFollowCard>
        <TwitterFollowCard userName="MonkeyDLuffyZZ" name="Luffy">
          Luffy
        </TwitterFollowCard>
    </section>
  )
}


