import styles from "./welcomeCard.module.css";
import Link from "next/link";

export default function WelcomeCard() {
    return (
    <div className={styles.banner_area}>
        <div className={styles.content_area}>
           <div className={styles.content}>
              <h1>Bem vindo</h1>
              <h1>ao <span>Orange Portfólio</span></h1>
              <p>Faça parte dessa grande comunidade!</p>
              <Link href='/cadastro'><button className={styles.btn}>comece agora!</button></Link>
           </div>
        </div>
    </div>
    );
}