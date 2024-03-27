import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aPet = useLoaderData()
    const id = aPet?.url.split("/")[4]

    return (
        <div>
            <h1>{aPet.name}</h1>
            <h2>{aPet.age}</h2>
            <div>
             <Form action={`/update/${id}/`} method="POST">
             <label htmlFor="name">
                Rename Turtle
                <input type="text" name="name" id="name" defaultValue={aPet.name}/>
            </label>
            <label htmlFor="age">
                What's their Age?
                <input type="number" name="age" id="age" defaultValue={aPet.age}/>
            </label>
            <button style={{"backgroundColor": "blue"}}>Update Turtle</button>
             </Form>
             <Form action={`/delete/${id}/`} method="POST">
             <button style={{"backgroundColor": "red"}}>Delete</button>
             </Form>
            </div>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}