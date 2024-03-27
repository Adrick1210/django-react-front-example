import { Link } from "react-router-dom";

function Pet({ pet }) {

    const id = pet.url.split("/")[4]

    return (
        <div>
            <Link to={`/pets/${id}`}>
            <h1>{pet.name}</h1>
            </Link>
        </div>
    )
}

export default Pet;