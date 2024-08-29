
import style from './Post.module.css' 


import { Comment } from './Comment'


import profile from '../assets/profile.png'
import { Avatar } from './Avatar'

export function Post(){
    return(
       <article className={style}>
           <header>
                <div>
                   <Avatar />
                    <div>
                       <strong>Jane Cooper</strong>
                       <small>Dev Front-End</small>
                    </div>
                </div>
                <p>Públicado há 1h</p>
           </header>

           <div className={style.div}>
           <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <a href="#"><p>👉 jane.design/doctorcare</p></a>

            <p className= {style.lastP}>#novoprojeto #nlw #rocketseat</p>
           </div>
           <form>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder='Digite um comentário'>

            </textarea>
            <footer>
                <button type='submit'>Publicar</button>
                </footer>
           </form>

           <div>
                <Comment />
                <Comment />
                <Comment />
           </div>

       </article>
    )
}