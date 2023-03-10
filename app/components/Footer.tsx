import { FC } from "react"
import styles from "../styles/Home.module.css"

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://github.com/amilz"
                target="_blank"
                rel="noopener noreferrer"
            >
                built by{' '}
                <span className={styles.logo}>
                    amilz.sol
                </span>
            </a>
        </footer>
    )
}

export default Footer


