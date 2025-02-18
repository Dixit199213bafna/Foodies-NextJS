import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBg from "@/components/main-header/main-header-bg";

export default function MainHeader() {
    return <>
        <MainHeaderBg/>
        <header className={classes.header}>
            <Link href="/public" className={classes.logo}>
                <Image src={logoImg} alt="A plate with food" priority/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}