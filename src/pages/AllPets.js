import PetList from "../components/pets/PetList";


const DUMMY_DATA = [
  {
    id: "d1",
    title: "Daschund",
    image:
      "https://www.dogtime.com/assets/uploads/2011/01/file_23020_dachshund-dog-breed.jpg",
    address: "1212 Paw Walk, Pawtown",
    description: "First dog in the store",
  },
  {
    id: "d2",
    title: "Greyhound",
    image:
      "https://www.dogtime.com/assets/uploads/2011/01/file_23024_greyhound.jpg",
    address: "5223 Tail Lane, Pawtown",
    description: "Fastest dog in the store",
  },
];

function AllPetsPage() {
  return (
    <section>
      <h1>All Dogs</h1>
      <PetList pets={DUMMY_DATA} />
    </section>
  );
}

export default AllPetsPage;
