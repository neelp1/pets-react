import PetItem from "./PetItem";
import classes from "./PetList.module.css";

function PetList(props) {
  return (
    <ul className={classes.list}>
      {props.pets.map((pet) => (
        <PetItem key={pet._id} _id={pet._id} image={pet.image} title={pet.title} address={pet.address} description={pet.description} />
      ))}
    </ul>
  );
}

export default PetList;
