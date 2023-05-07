import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }: any) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
            <Navbar />
            </div>
            <main className={styles.main}>
            {children}
            </main>
            <div className={styles.sidebar}>
            <Sidebar></Sidebar>
            </div>
            <div className={styles.footer}>
            <Footer />
            </div>
        </div>
    )
}