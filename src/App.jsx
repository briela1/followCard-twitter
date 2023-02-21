import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'ItachixDarkness',
    name: 'Itachi Uchiha',
    isFollowing: true
  },
  {
    userName: 'goku',
    name: 'Goku',
    isFollowing: false
  },
  {
    userName: 'MonkeyDLuffyZZ',
    name: 'Luffy',
    isFollowing: true
  },
  {
    userName: 'light_yagami29',
    name: 'Light Yagami',
    isFollowing: false
  }
]

export function App() {

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}


