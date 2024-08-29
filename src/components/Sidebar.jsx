
import style from './Sidebar.module.css'
import { PencilSimpleLine } from '@phosphor-icons/react'

import profile from '../assets/profile.png'
import { Avatar } from './Avatar'

export function Sidebar(){
    return (
        <aside className={style.div}>
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div>
                <Avatar src={ profile } />
                <h2>Leslie Alexander</h2>
                <p>Web developer</p>
            </div>

            <div>
                <button>
                    <PencilSimpleLine  size={20}/>
                    Editar seu perfil
                    </button>
            </div>

        </aside>
    )
}