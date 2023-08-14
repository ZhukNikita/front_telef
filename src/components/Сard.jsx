import styles from '../styles/Card.module.scss'
import {easeIn, easeInOut, inView, motion} from 'framer-motion'

export default function Card({ color , height , width , text , h3 , h4 , img}){
  return(
    <motion.div className={styles.card} style={{backgroundColor: color , minHeight: height , width: width}}
    initial={{opacity: 0 , y: 50}}
    animate={{opacity:1 , y: 0}}
    transition={{duration: 0.7}}
    ease={easeIn}
    
    >
      <h3>{h3}</h3>
      <h4>{h4}</h4>
      <p>{text}</p>
      {img && (<img src={img}/>)}
    </motion.div>
  )
}