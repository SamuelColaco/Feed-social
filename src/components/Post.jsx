
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
        1,
        2
    ])
    
    function addComments(){
    
        event.preventDefault()
    
        setComments([...comments, setComments.length +1])
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
                    return <p>{line.content}</p>
                }
                else if(line.type === "link"){
                    return <a href="#"> <p>{line.content}</p></a>
                }
            })}

            <p className= {style.lastP}>#novoprojeto #nlw #rocketseat</p>
           </div>
           <form onSubmit={addComments}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder='Digite um comentário'>

            </textarea>
            <footer>
                <button type='submit'>Publicar</button>
                </footer>
           </form>

           <div>
               {comments.map(comment => {
                return <Comment />
               })}
            

           </div>

       </article>
    )
}