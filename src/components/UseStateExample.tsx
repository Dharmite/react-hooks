import React from 'react'

type updateFavoriteColorType = () => void;
type favoriteColorType = 'red' | 'blue';

export default function UseStateExample() {
    const [favoriteColor, setFavoriteColor] = React.useState<favoriteColorType>('blue');
    const updateFavoriteColor: updateFavoriteColorType = () => {
        setFavoriteColor((prevFavoriteColor) => prevFavoriteColor === 'red' ? 'blue' : 'red');
    }

    return (
        <>
            <h1>My favourite color is: {favoriteColor}</h1>
            <button onClick={updateFavoriteColor}>{favoriteColor}</button>
        </>
    )
}
