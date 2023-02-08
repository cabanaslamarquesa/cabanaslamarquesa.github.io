import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Reservation from '../components/Reservation';
import bd from '../hooks/bd';

const Information = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const params = useParams()
    let chalet = params.id
    console.log(bd()[chalet])

    return (
        <div className='information'>
            <Reservation 
                title={bd()[chalet].title}
                img={bd()[chalet].img}
                description={bd()[chalet].description}
                information={bd()[chalet].information}
                icons={bd()[chalet].icons}
                price={bd()[chalet].price}
            />
        </div>
    );
};

export default Information;