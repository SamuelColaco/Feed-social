
import style from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import profile from '../assets/profile.png'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={style.commentDiv}>
            < Avatar hasBorder={false}  src={ profile }/>
            <div className={style.commentBox}>
                <div className={style.comment}>
                    <header>
                        <div>
                            <strong>Devon Lane (você)</strong>
                            <small>Cerca de 2h</small>
                        </div>
                                
                            <button title='Deletar comentário'>
                                <Trash  size={24}/>
                            </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}