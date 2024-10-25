import Link from "next/link"
import styles from "../../styles/Home.module.css"
import Banner from "../banner/Banner"
import getServerSideProps from "../../pages/api/productApi"
import { useEffect, useState } from "react";
import Cardcomp from "./Cardcomp";



export default function Herocomp({cardData}){

    

    return(
        <div className={styles.herodiv}>            
            <Cardcomp newdata={cardData}/>
        </div>
    )
}