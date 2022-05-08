import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Pets</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Pets</Link>
          </li>
          <li>
            <Link to="/new-pet">Buy Pet</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={classes.badge}>
                {favouritesCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
