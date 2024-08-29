
import style from './Post.module.css' 

import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Comment } from './Comment'


import { Avatar } from './Avatar'




export function Post(props){
    const publishedDateFormat = format(props.publishedAt, "dd 'de' LLLL 'ás' MM:mm'h'", {
        locale: ptBR,
    })
    const publishedDifference = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    }) 

    const [comments, setComments] = useState([
        'Boa cara',
    ])
    const [newTextComment, setNewTextComment] = useState('')

    function addComments(){
    
        event.preventDefault()

            setComments([...comments, newTextComment])
            setNewTextComment('')
    }

    function HandleValue(){
        setNewTextComment(event.target.value)
    }

    function deleteComment(commentDelete){
        const arrayWithoutCommentDeleted = comments.filter(comment => {
            return comment !== commentDelete
        })

        setComments(arrayWithoutCommentDeleted)
    }

    return(
       <article className={style}>
           <header>
                <div>
                   <Avatar src={props.author.avatarUrl} />
                    <div>
                       <strong>{props.author.name}</strong>
                       <small>{props.author.role}</small>
                    </div>
                </div>
                <p title={publishedDateFormat}>
                    {publishedDifference}
                </p>
           </header>

           <div className={style.div}>

            {props.content.map(line => {
                if(line.type === "paragraph"){
                    return <p key={line.content}>{line.content}</p>
                }
                else if(line.type === "link"){
                    return <a href="#" key={line.content}> <p>{line.content}</p></a>
                }
            })}

            <p className= {style.lastP}>#novoprojeto #nlw #rocketseat</p>
           </div>
           <form onSubmit={addComments}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder='Digite um comentário' name='comments' onChange={HandleValue} value={newTextComment} required>

            </textarea>
            <footer>
                <button type='submit' disabled = {newTextComment.length===0}>Publicar</button>
                </footer>
           </form>

           <div>
               {comments.map(comment => {
                return <Comment key = {comment} content={comment} ondeleteComment = {deleteComment}/>
               })}
            

           </div>

       </article>
    )
}