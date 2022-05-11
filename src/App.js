import { Route, Switch } from "react-router-dom";

import AllPetsPage from "./pages/AllPets";
import NewPetsPage from "./pages/NewPet";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllPetsPage />
        </Route>
        <Route path="/new-pet">
          <NewPetsPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
