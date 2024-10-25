import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Footers(){
    return(
        <div className={styles.footerdiv}>
            <div className='d-flex justify-content-around'>
                <div>
                    <Link href="">@ Bastionex infotech</Link>
                </div>
                <div className='d-flex justify-content-around gap-2 align-items-center'>
                    <p>Terms of uses</p> 
                    <p>|</p> 
                    <p>Privicy policy</p>
                </div>
            </div>
        </div>
    )
}