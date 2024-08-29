
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import profile from './assets/profile.png'

const post = [
  {
    id:1,
    author: {
      avatarUrl: `${ profile }`,
      name: 'Samuel Colaço',
      role: 'Student',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date()
  },
  {
    id:2,
    author: {
      avatarUrl: `${ profile }`,
      name: 'Diego',
      role: 'Student',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('08-29-2024 16:21')
  },
]

function App() {
  return (
      <div>
        <Header  />

        <div className={styles.wrapper}>

         
            <Sidebar />
            

          <main>

            {post.map(post=> {
              return (
              <Post
              author ={post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}
              />
            )
            })}

          </main>

        </div>

      </div>

  )
}

export default App
