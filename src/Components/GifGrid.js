import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
// import { getGifs } from '../helpers/getGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGif(category);


    // useEffect( () =>{
    //     getGifs(category).then(imgs => setImages(imgs))
    // }, [category]);



    return (
        <div className='card-grid'>
           <h3 className='animate__animated animate__fadeIn'>{category}</h3>
           {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
                {
                    images.map(img => <GifGridItem key={img.id} {...img} />)
                }
        </div>
    )
}
