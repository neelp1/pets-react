import { useHistory } from 'react-router-dom';

import NewPetForm from "../components/pets/NewPetForm";

function NewPetsPage() {
  const history = useHistory();

  function addPetHandler(petData) {
    const api_url = new URL("http://localhost:3001/api/pets/dog");
    //Call pets-app REST API
    fetch(api_url, {
      method: "POST",
      body: JSON.stringify(petData),
      headers: {
          'Content-Type': 'application/json'
      }
    }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Pet</h1>
      <NewPetForm onAddPet={addPetHandler} />
    </section>
  );
}

export default NewPetsPage;
