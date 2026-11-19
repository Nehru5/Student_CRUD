import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Updatestudent = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [department, setDepartment] = useState("")
    const [course, setCourse] = useState("")
    let {id}  = useParams()
    console.log(id);

    useEffect(()=>{
      axios.get(`http://localhost:3000/students/${id}`)
    .then(x=>{
      setName(x.data.name)
      setEmail(x.data.email)
      setPhone(x.data.phone)
      setDepartment(x.data.department)
      setCourse(x.data.course)
    })
    .catch(err=>console.log(err))
    },[])
  return (
    <>
    <Navbar/>
    <center><h1>Update Student</h1></center>
    <center>
        <form>
          <input 
          type="text" 
          placeholder='Enter Name' 
          required 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          /> <br />

          <input 
          type="text" 
          placeholder='Enter Email' 
          required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /> <br />
          <input 
          type="text" 
          placeholder='Enter Mobile Number' 
          required 
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          /> <br />
          <input 
          type="text" 
          placeholder='Enter Department' 
          required 
          value={department}
          onChange={(e)=>setDepartment(e.target.value)}
          /> <br />
          <input 
          type="text" 
          placeholder='Enter Course' 
          required 
          value={course}
          onChange={(e)=>setCourse(e.target.value)}
          /> <br />
          <button>Update</button>
        </form>
      </center>
    </>
  )
}

export default Updatestudent