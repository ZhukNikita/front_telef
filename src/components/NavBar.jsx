import styles from '../styles/NavBar.module.scss'
import diamond from '../img/diamond.png'
import en from '../img/en.png'
import {Link} from "react-router-dom";
import * as Scroll from 'react-scroll';
export default function Navbar () {
  let scroll = Scroll.animateScroll
  return(
    <div className={styles.navbar}>
        <Link to='/' className={styles.logo}>
          <img src={diamond} alt=""/>
          <h3>DIAMONDCALL</h3>
        </Link>
        <div className={styles.leftsidebar}>
          {/* <img src={en} alt="Translate" className={styles.translate}/> */}
          <button className={styles.contactUs} onClick={()=> scroll.scrollToBottom()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
              <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
            </svg> Contact Us</button>
        </div>

    </div>
  )
}