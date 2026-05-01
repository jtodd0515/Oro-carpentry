import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";// Optional CSS module


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/orosign.jpg" alt="Oro-Carpentry" width={50} height={50} />
      </div>
      <ul className={styles.navLinks}>
        <li><p>(919) 730-2729</p></li>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/pages/about">About Us</Link></li>
        <li><Link href="/pages/photos">Photo Gallery</Link></li>
        <li><Link href="/pages/contact">Contact</Link></li>
        <li><Link href="/pages/reviews">Reviews</Link></li>
      </ul>
    </nav>
  );
}
