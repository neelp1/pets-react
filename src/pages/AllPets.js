import { useState, useEffect } from 'react';

import PetList from "../components/pets/PetList";

function AllPetsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPets, setLoadedPets] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const api_url = new URL("http://localhost:3001/api/pets/dogs");
    //Call pets-app REST API
    fetch(api_url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setLoadedPets(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Dogs</h1>
      <PetList pets={loadedPets} />
    </section>
  );
}

export default AllPetsPage;
