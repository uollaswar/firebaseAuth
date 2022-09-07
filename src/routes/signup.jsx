import { useState } from "react";
import {userAuth} from "../authContext"

export default function SignUp() {
  const [formData,setFormData] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    newsletter: false,
  })
const [error, setError] = useState("")

const {createUser} = userAuth()


  const handleSubmit = async (event)=> { 
    event.preventDefault()

    setError("")
    try{
        await createUser(email, password)
    } catch(event){
      setError(event.message)
      console.log(event.message)
    }

    submitToApi(formData)
  }

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}
  
  return (
    <main style={{ padding: "1rem 0" }}>

      <form onSubmit={handleSubmit} >

        <legend>first name</legend>
        <input 
        name="firstName" 
        type="text" 
        placeholder="Mirco" 
        onChange={handleChange} 
        value={formData.firstName} />

        <legend>last name</legend>
        <input 
        name="lastName" 
        type="text" 
        placeholder="Pugliese" 
        onChange={handleChange} 
        value={formData.lastName}/>

        <legend>email</legend>
        <input 
        name="email" 
        type="text" 
        placeholder="123@gmail.com" 
        onChange={handleChange} 
        value={formData.email} />

        <legend>do you want to recieve our newsletter ?</legend>
        <input 
        name="newsletter" 
        type="checkbox" 
        onChange={handleChange} 
        checked={formData.newsletter}  />
        <br />
        <br />

        <button>SignUp</button>

      </form>
    </main>
  );
}