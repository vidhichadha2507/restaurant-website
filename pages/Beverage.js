import React from 'react'
import { client, urlFor } from '../lib/client';
import HeroBanner from '../components/HeroBanner'
import { v4 as uuidv4 } from 'uuid';

import Card from '../components/Card';
import '../styles/card.module.css'

const Beverage = ({ beverageData }) => {

    const { image, name, price, slug } = beverageData[0];
    console.log(name);
    console.log(image);
    console.log(price);
    console.log(slug);





    console.log(beverageData[0]);
    return (
        <div>

            {/* <HeroBanner /> */}
            <div className='cards-area'>
                <div className='cards-container'>

                    {beverageData.map((data) => (
                        <Card name={data.name} price={data.price} image={data.image} slug={data.slug} type={data.type} key={uuidv4()} />
                    ))}
                </div>
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