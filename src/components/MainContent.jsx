import styles from '../styles/MainContent.module.scss'
import Card from "./Сard";

export default function MainContent() {
  return(
    <div className={styles.mainContent}>
        <div className={styles.contentCards}>
          <Card gridArea={'card1'}/>
          <Card gridArea={'card2'}/>
          <Card gridArea={'card3'}/>
        </div>
    </div>
  )
}