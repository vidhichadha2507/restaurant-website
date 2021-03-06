import React from 'react'
import { client, urlFor } from '../lib/client';

import Card from '../components/Card';
import { v4 as uuidv4 } from 'uuid';
import '../styles/card.module.css'
import appetizers from '../sanity_ecommerce/schemas/appetizers';

const Breakfast = ({ beverageData }) => {

    const { image, name, price, slug } = beverageData[0];
    console.log(name);
    console.log(image);
    console.log(price);
    console.log(slug);





    console.log(beverageData[0]);
    return (
        <div className='cards-area'>
            <div className='cards-container'>

                {beverageData.map((data) => (
                    <Card name={data.name} price={data.price} image={data.image} slug={data.slug} type={data.type} key={uuidv4()} />
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {

    const beverageQuery = '*[_type == "breakfast"]';
    const beverageData = await client.fetch(beverageQuery);

    return {
        props: { beverageData }
    }
}

export default Breakfast