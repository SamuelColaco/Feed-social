
import style from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import profile from '../assets/profile.png'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ ondeleteComment, content,  ...props}){

    function handleDelete(){
        ondeleteComment(content)
    }
    const [likeCount, setLikeCount] = useState(0)

    function likeChange(){
        setLikeCount(likeCount + 1)
    }

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
                                
                            <button title='Deletar comentário' onClick={handleDelete}>
                                <Trash  size={24}/>
                            </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={likeChange}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}