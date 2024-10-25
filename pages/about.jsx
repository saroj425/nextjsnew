import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Herocomp from "@/components/hero/Herocomp";
import Headers from "@/components/header/Header";
import Banner from "@/components/banner/Banner";

export default function Aboutus(){
    return(
        <div className={styles.main}>
            <Head>
                <title>About us page for new software</title>
                <meta name="description" content="Learn more about us." />
            </Head> 
            <Headers/>
            <Banner title="Welcome to My Site" subtitle="This is a sample banner created in Next.js"/>
            <Herocomp/>
            <div>
                <h1>About Us</h1>
                <p>This is about us page</p>
                <Link href="/">Home</Link>
            </div>
        </div>
    )
}