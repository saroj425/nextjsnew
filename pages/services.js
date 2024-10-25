import Footers from "@/components/footer/Footer";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Headers from "@/components/header/Header";
import Herocomp from "@/components/hero/Herocomp";
import Banner from "@/components/banner/Banner";
export default function Services(){
    return(
        <div className={styles.main}>
            <Head>
                <title>About us page for new software</title>
                <meta name="description" content="Learn more about us." />
            </Head>            
            <Headers/>
            <Banner title="Welcome to My Site" subtitle="This is a sample banner created in Next.js"/>
            <Herocomp/>
            <h2>Services</h2>
            <Footers/>
        </div>
    )
}