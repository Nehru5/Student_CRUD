import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Viewstudent = () => {
  const [students, setStudents] = useState([])

  let navigate = useNavigate()

  function fethData(){
    axios.get("http://localhost:3000/students")
    .then(x=>setStudents(x.data))
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    fethData()
  },[])

  function handleUpdate(id){
    navigate(`/updatestudent/${id}`)
  }
  return (
    <>
    <Navbar/>
      <center><h1>Students List</h1></center>
      {students.map((x)=>{
        return <div key={x.id}>
          <h1>Name: {x.name}</h1>
          <h2>Email: {x.email}</h2>
          <h2>Phone: {x.phone}</h2>
          <h2>Department: {x.department}</h2>
          <h2>Course: {x.course}</h2>
          <button onClick={()=>handleUpdate(x.id)}>Edit</button>
          <button>Delete</button>
        </div>
      })}
    </>
  )
}

export default Viewstudent