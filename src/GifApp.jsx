import { useState } from "react";
import { AddCategory, Footer, GifGrid } from './components';
import './styles.css';

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Naruto']);

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <section id="section">
                <h1>Gif App</h1>

                <AddCategory 
                    onNewCategory={ onAddCategory }
                />

                {
                    categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                    ) )
                }
            </section>
            
            <Footer />
        </>
    )
}

export default GifExpertApp;