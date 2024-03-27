import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL 

// CREATE
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body 
    const newPet = {
        name: formData.get("name"),
        age: formData.get("age"),
    }

    // redirect back to index
    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPet)
    })
    return redirect("/")
}

// UPDATE
export const updateAction = async ({request, params}) => {
    // get formdata 
    const formData = await request.formData()
    // get id of pet
    const id = params.id
    // construct request body
    const updatedPet = {
        name: formData.get("name"),
        age: formData.get("age"),
    }
    // send the request
    await fetch(`${URL}${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedPet)
    })
    // redirect
    return redirect(`/pets/${id}`)
}


// DELETE
export const deleteAction = async ({params}) => {
    // get pet id
    const id = params.id
    // send the request to backend
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    // redirect
    return redirect("/")
}