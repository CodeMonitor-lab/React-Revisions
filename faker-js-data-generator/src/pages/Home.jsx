import React, { useState } from 'react'
import { faker } from '@faker-js/faker'
import Styles from '../styles/Home.module.css'
import ProductCards from '../components/ProductCards'

faker.seed(100);

const Home = () => {

    const productsArray = [...Array(105)].map(() => {
        return {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.personPortrait(),
        }
    }) 

    const [products] = useState(productsArray);
    console.log(products);

    return (
        <>
            <main className={Styles.Product_container}>
                {products.map((prod) => (
                    <div className={Styles.products}>
                        <ProductCards img={prod.image} name={prod.name} price={prod.price.substring(0,5)} />
                    </div>
                ))}
            </main>

        </>
    )
}

export default Home