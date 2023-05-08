import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }: any) {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Navbar />
                </div>
                <main className={styles.main}>
                    {children}
                </main>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}