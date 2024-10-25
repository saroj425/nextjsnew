// pages/details/[id].js
import Headers from '@/components/header/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'

const DetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            };
            fetchProduct();
        }
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
          <div>
              <Head>
                <title>About us page for new software</title>
                <meta name="description" content="Learn more about us." />
              </Head>            
              <Headers/>  
              <div className={styles.herodiv} style={{marginTop:"20px"}}>
                <div className={styles.detailsmain}>
                  <div className={styles.detailsimgdiv}>
                      <img src={product.image} alt={product.title} />
                  </div>
                  <div className={styles.detailsdesc}>
                    <h1>{product.title}</h1>
                    <p>&#8377; {product.price}</p>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
          </div>
    );
};

export default DetailPage;
