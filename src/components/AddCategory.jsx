import React, { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        const inputValueTrim = inputValue.trim();

        if ( inputValueTrim.length <= 1 ) return;

        onNewCategory( inputValueTrim )
        setInputValue('')
    }


    return (
        <form onSubmit={ onSubmit } >
            <input 
                type="text" 
                placeholder='Busca tus gifs favoritos...'
                value={ inputValue }
                onChange={ (e) => setInputValue(e.target.value) }
            />
        </form>
    )
}

export default AddCategory;