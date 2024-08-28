
import style from './Header.module.css'

import logo from '../assets/logo.svg'

export function Header(){
    return (
        <header className={style.header}>
            <img src = { logo } alt="Logo do ignite feed" />
            <h1>Ignite Feed</h1>
        </header>
    )
}