import {BiCameraMovie,BiSearchAlt2} from "react-icons/bi"
import {Link,useNavigate} from "react-router-dom"
import './Navbar.css'
import React from "react"
const Navbar = () => {
    const [search,Setsearch] = React.useState("")
    const navigate = useNavigate()

    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(search)
        if(!search) return 
       navigate(`/search?q=${search}`)
       Setsearch("")
    }

  return (
    <div>    
         <nav id="navbar">
    <h2>
    <Link to="/"> <BiCameraMovie/> MoviesLib</Link>
    </h2>
    <form action=""  onSubmit={handleSubmit}>
        <input type="text" name="Form" id="text" placeholder="Busque um filme.." onChange={({target})=> Setsearch(target.value) } value={search}/>
        <button type="submit"><BiSearchAlt2 /></button>
    </form>



     </nav></div>
  )
}

export default Navbar