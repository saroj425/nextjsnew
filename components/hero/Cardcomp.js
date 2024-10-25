import React from 'react';
import styles from './Hero.module.css'
import { useRouter } from 'next/router';

const Cardcomp = ({ newdata }) => {
    console.log("Card Data====", newdata);
    const router = useRouter(); 

    const navigatTodetails = (itemsid)=>{
        console.log("item.iditem.id",itemsid);
        router.push(`/details/${itemsid}`)
    }

    return (
        <div className={styles.cardmain}>
            {newdata && newdata.map((item) => {
                const truncatedTitle = item.title.length > 25 ? item.title.substring(0, 25) + "..." : item.title;
                const truncatedDesc = item.description.length > 100 ? item.description.substring(0, 100) + "..." : item.description;
                return (
                    <div key={item.id} className="card">
                        <div className={styles.imgdiv}>
                            <img className="card-img-top" src={item.image} alt={item.title} />
                        </div>
                        <div className="card-body">
                            <p>&#8377; {item.price} <span className="badge bg-primary">{`Rating: ${item.rating.rate} (${item.rating.count} reviews)`}</span></p>
                            <h5 className="card-title">{truncatedTitle}</h5> {/* Display the product title */}
                            <p className="card-text">{truncatedDesc}</p> {/* Display the product description */}
                            <button onClick={()=>navigatTodetails(item.id)} className='btn-primary w-100 p-2 br-10'>Details</button>
                        </div>            
                    </div>
                );
            })}
        </div>
    );
};

export default Cardcomp;
