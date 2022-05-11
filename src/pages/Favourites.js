import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import PetList from "../components/pets/PetList";

function FavouritesPage() {
  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favourites</p>    
  }else{
    content = <PetList pets={favouriteCtx.favourites} />
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
