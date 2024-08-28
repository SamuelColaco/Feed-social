import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'


function App() {
  return (
      <div>
        <Header  />

        <div className={styles.wrapper}>

          <Sidebar />

          <main>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ducimus necessitatibus et, eaque suscipit fuga eius saepe quisquam minima recusandae quidem nostrum commodi quaerat ratione consectetur. Totam necessitatibus esse fugiat.</p>
          </main>

        </div>

      </div>

  )
}

export default App
