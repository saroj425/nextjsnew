import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Herocomp from "@/components/hero/Herocomp";
import Headers from "@/components/header/Header";
import Footers from "@/components/footer/Footer";
import Banner from "@/components/banner/Banner";

export default function Contact(){
    return(
        <div className={styles.main}>
            <Head>
                <title>Contact us page</title>
                <meta name="description" content="Contact us for more details" />
            </Head>            
            <Headers/>
            <Banner title="Welcome to My Site" subtitle="This is a sample banner created in Next.js"/>
            <Herocomp/>
            {/* <div>
                <h1>Contact Us</h1>
                <p>This is contact us page</p>
                <Link href="/">Home</Link>
            </div> */}
            <Footers/>
        </div>
    )
}