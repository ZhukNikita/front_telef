import styles from '../styles/MainContent.module.scss'
import Card from "./Сard";
import img from '../img/img1.png'
import {motion} from 'framer-motion'
export default function MainContent() {
  const cards = [{
    heigth:'400px',
    width:'38%',
    id: Date.now(),
    img: img,
    h3: 'Connect your SIP PBX',
    h4:`Send and receive calls in minutes`,
    p:'We operate our own Autonomous System and buy IP transit directly from Tier 1 carriers. '
  },
  {
    heigth:'170px',
    width: '52%',
    id: Date.now(),
    h3: 'SIP termination',
    h4: 'High—quality ISDN-grade voice',
    text: 'Beat latency by connecting to local VoIP gateways in 12 countries. Each PoP is directly connected to multiple voice carriers. We operate our own network and hardware-based switches.'
  }
]
  return(
    <div className={styles.mainContent}>
        <div className={styles.contentCards}>
          {
            cards.map(el=>
                <Card key={el.id} color={el.color} height={el.heigth} width={el.width} text={el.text} h3={el.h3} h4={el.h4} img={el.img}/>
            )
          }
        </div>
        <motion.div className={styles.chips}
            initial={{opacity: 0 , y: 50}}
            animate={{opacity:1 , y: 0}}
            transition={{duration: 0.7}}
        >
            <h3>Diamond Call portal tour</h3>
            <div className={styles.features}>
                <div className={styles.feature}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                  <path d="M20 3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 5h-2V6h2zm4 0h-2V6h2zm1 5H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-5 5h-2v-2h2zm4 0h-2v-2h2z"></path>
                </svg>
                  <p>We operate our own Autonomous System and buy IP transit directly from Tier 1 carriers. Diamond Call owns the hardware in each PoP.</p>
                </div>
                <div className={styles.feature}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                  <path d="M17 7c-2.094 0-3.611 1.567-5.001 3.346C10.609 8.567 9.093 7 7 7c-2.757 0-5 2.243-5 5a4.98 4.98 0 0 0 1.459 3.534A4.956 4.956 0 0 0 6.99 17h.012c2.089-.005 3.605-1.572 4.996-3.351C13.389 15.431 14.906 17 17 17c2.757 0 5-2.243 5-5s-2.243-5-5-5zM6.998 15l-.008 1v-1c-.799 0-1.55-.312-2.114-.878A3.004 3.004 0 0 1 7 9c1.33 0 2.56 1.438 3.746 2.998C9.558 13.557 8.328 14.997 6.998 15zM17 15c-1.33 0-2.561-1.44-3.749-3.002C14.438 10.438 15.668 9 17 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path>
                </svg>
                  <p>SIP termination is homed to local carriers. RTP streams over lowest latency, domestic IP links without looping through aggregation sites.</p>
                </div>
                <div className={styles.feature}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
                </svg>
                  <p>Don't do it alone. We will navigate the local telecom environment for you.</p>
                </div>
                <div className={styles.feature}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                </svg>
                  <p>Diamond Call is a member of multiple IXes worldwide with access to hundreds of networks through meet-me rooms and cross-connects.</p>
                </div>
            </div>
        </motion.div>
        {/* <motion.div className={styles.interface} initial={{opacity:0 , y: 100}} animate={{opacity:1 , y:0}} transition={{duration: 0.7}}>
           <h2>Advanced yet simple interface</h2>
           <p>Everything you need is in our self-service portal</p>
        </motion.div> */}
        <div className={styles.iterfaceImg}>

        </div>
        <div className={styles.aboutUs}>
            <div className={styles.aboutblock}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
              <path d="M13 3h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2zm19.707-5.293-1.414-1.414L18.586 7A6.937 6.937 0 0 0 15 6c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7a6.968 6.968 0 0 0-1.855-4.73l1.562-1.563zM16 14h-2V8.958h2V14z"></path>
            </svg>
                <h3>Perfomance</h3>
                <p>Total latency on a call beats competitor solutions.</p>
            </div>
            <div className={styles.aboutblock}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
              <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
                <h3>Visibility</h3>
                <p>Inbound SIP and RTP traffic streams from local IXPs.</p>
            </div>
            <div className={styles.aboutblock}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
              <path d="M16.445 3h-8.89c-.345 0-.666.178-.849.47L3.25 9h17.5l-3.456-5.53a1.003 1.003 0 0 0-.849-.47zM11.26 21.186a1 1 0 0 0 1.48 0L22 11H2l9.26 10.186z"></path>
              </svg>
                <h3>Lower total cost</h3>
                <p>In many markets, wholesale Diamond Call pricing is available on a block.</p>
            </div>
        </div>
        <motion.div className={styles.contactUs}
                    initial={{opacity: 0 , y: 50}}
                    animate={{opacity:1 , y: 0}}
                    transition={{duration: 0.7}}
                    >
          <h3>Contact Us</h3>
          <p>Diamond Call maintains 3 NOCs and supports customers across the globe in all time zones, 24/7.</p>
          <a href="mailto:email@diamondcall.com">email@diamondcall.com</a>
        </motion.div>
    </div>
  )
}