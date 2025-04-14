import React, { useState } from 'react'
import Styles from './Styles/ProductCards.module.css'

const ProductCards = ({ id,name,img,price,prod}) => {

    const [cart ,setCart] = useState([]);

    return (
        <>
            <main className={Styles.Container_prod}>
            <section  className={Styles.product_section}>
                    <img src={img} alt="" loading='lazy' />
                <article className={Styles.product_article}>
                    <h2>{name}</h2>
                    <p>{price}</p>
                    {cart.includes(prod) ? (<button onClick={(()=>{setCart(cart.filter((c)=> c.id !== prod.id))})} className={Styles.Add_Cart}>Remove from Cart</button>)
                     : (<button onClick={(()=>{setCart([setCart[cart,prod]])})} className={Styles.Add_Cart}>Add to Cart</button>)
                     }                    
                </article>
            </section>
            </main>
        </>
    )
}

export default ProductCards