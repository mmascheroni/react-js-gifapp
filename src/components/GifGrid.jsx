import { GifItem } from "./index";
import { useFetchGifs } from "../hooks/useFetchGifs";


const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            
            <div className="card-grid" >
                {
                    isLoading && <p>Cargando...</p>
                }
                {
                    !isLoading &&
                    images.map((image) => (
                        <GifItem key={ image.id } {...image } />
                        )
                    )
                }
            </div>
        </>
    )
}

export default GifGrid