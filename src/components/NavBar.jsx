import styles from '../styles/NavBar.module.scss'
import diamond from '../img/diamond.png'
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import en from '../img/en.png'
import es from '../img/es.png'
import de from '../img/de.png'
import it from '../img/it.png'
import fr from '../img/fr.png'
import {useState} from "react";
import i18n from '../i18n/config';

export default function Navbar ({setIsOpen , isLangOpen , setIsLangOpen}) {
  const { t , i18n } = useTranslation();
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    setIsLangOpen(false)
  }
  function changeImg() {
    switch (i18n.language){
      case 'en':
        return (<img src={en} alt="Translate" className={styles.translate} onClick={()=>setIsLangOpen(!isLangOpen)}/>)
      case 'de':
        return (<img src={de} alt="Translate" className={styles.translate} onClick={()=>setIsLangOpen(!isLangOpen)}/>)
      case 'fr':
        return (<img src={fr} alt="Translate" className={styles.translate} onClick={()=>setIsLangOpen(!isLangOpen)}/>)
      case 'es':
        return (<img src={es} alt="Translate" className={styles.translate} onClick={()=>setIsLangOpen(!isLangOpen)}/>)
      case 'it':
        return (<img src={it} alt="Translate" className={styles.translate} onClick={()=>setIsLangOpen(!isLangOpen)}/>)
      default:
        return (<img src={en} alt="Translate" className={styles.translate} onClick={()=>setIsLangOpen(!isLangOpen)}/>)
    }
  }
  console.log(i18n.language)
  return(
    <div className={styles.navbar}>
        <Link to='/' className={styles.logo}>
          <img src={diamond} alt=""/>
          <h3>DIAMONDCALL</h3>
        </Link>
        <div className={styles.rightsidebar}>
          {changeImg()}
          {isLangOpen?<ul className={styles.langList}>
            <li onClick={()=>changeLanguage('en')}><img src={en} alt="" style={{width:'26px', height:'26px' , borderRadius:"13px"}}/></li>
            <li onClick={()=>changeLanguage('de')}><img src={de} alt="" style={{width:'26px', height:'26px', borderRadius:"13px"}}/></li>
            <li onClick={()=>changeLanguage('it')}><img src={it} alt="" style={{width:'26px', height:'26px', borderRadius:"13px"}}/></li>
            <li onClick={()=>changeLanguage('fr')}><img src={fr} alt="" style={{width:'26px', height:'26px', borderRadius:"13px"}}/></li>
            <li onClick={()=>changeLanguage('es')}><img src={es} alt="" style={{width:'26px', height:'26px', borderRadius:"13px"}}/></li>
          </ul>:<></>}
          <button className={styles.contactUs} onClick={()=> setIsOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
              <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
            </svg> <p>{t("contactUsButton")}</p></button>
        </div>

    </div>
  )
}