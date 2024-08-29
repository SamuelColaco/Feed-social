
import profile from '../assets/profile.png'
import style from './Avatar.module.css'

export function Avatar({hasBorder = true, src}){
    return <img  className= {hasBorder ? style.border : style.noBorder} src = {src}/>
}