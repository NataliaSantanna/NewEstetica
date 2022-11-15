import styles from "./styles.module.css"
import Link from 'next/link'


export default function HeaderEstetica() {
    return (
        <>
            <header className={styles.headerHomepage}>
            <Link href="/" className={styles.linkHome}> <p>NEWESTETICA</p> </Link>

            </header>
        </>
    )
}