import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouritePet) => {},
    removeFavourite: (petId) => {},
    itemIsFavourite: (petId) => {},
});

//store favourite in browser storage or server
export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouritePet) {
        setUserFavourites((prevUserFavourite) => {
            return prevUserFavourite.concat(favouritePet);
        });
    };

    function removeFavouriteHandler(petId) {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(pet => pet.id !== petId);//make sure pet has id key?
        });
    };

    function itemIsFavouriteHandler(petId) {
        return userFavourites.some(pet => pet.id === petId);//make sure pet has id key?
    };
    
    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler,
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;