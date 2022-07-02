import React from 'react'
import { useRouter } from 'next/router';
const getPath = () => {


    const router = useRouter()
    const path = router.asPath.substring(9);
    console.log(path);
    return (path);

}
export default getPath