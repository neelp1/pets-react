import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
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
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
