import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return(
    <div className={styles.footer}>
      <div className={styles.content}>
        <h6>
          © 2023 DiamondCall LLC All rights reserved.
        </h6>
      </div>
    </div>
  )
}