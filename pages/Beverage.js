import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/client';
import { Product } from '../components';
import { useStateContext } from '../context/StateContext';
import Card from '../components/Card';
import '../styles/card.module.css'

const Beverage = ({ beverageData }) => {

    const { image, name, price, slug, type } = beverageData[0];
    console.log(name);
    console.log(image);
    console.log(price);
    console.log(slug);





    console.log(beverageData[0]);
    return (
        <div className='cards-area'>
            <div className='cards-container'>

                {beverageData.map((data) => (
                    <Card name={data.name} price={data.price} image={data.image} slug={data.slug} type={data.type} />
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {

    const beverageQuery = '*[_type == "beverage"]';
    const beverageData = await client.fetch(beverageQuery);

    return {
        props: { beverageData }
    }
}

export default Beverage