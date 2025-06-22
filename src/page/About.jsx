import axios from "axios"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
export default function About(){
   const [nm, setName]=useState("")
   const [eml, setEamil]=useState("")
   const [mb, setMob]=useState("")
   const [age, setAge]=useState("")
   const [ct, setCity]=useState("")
   const [ttl, setTtl]=useState(0)
   const [data, setData]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const hndlnm=(e)=>  setName(e.target.value) 
const hndleml=(e)=>  setEamil(e.target.value) 
const hndlmb=(e)=>  setMob(e.target.value) 
const hndlage=(e)=>  setAge(e.target.value)
const hndlct=(e)=>  setCity(e.target.value) 


   const getnm=()=>{
    console.log(nm)
      console.log(eml)
        console.log(mb)
          console.log(age)
            console.log(ct)
   }
     //onload 
     useEffect(()=>{
      covid()
     },[])


    const covid=()=>{
       axios.get('https://api.rootnet.in/covid19-in/stats/latest')
       .then(res=>{
       // console.log(res.data.data.summary.total)
        setTtl(res.data.data.summary.total)
        setData(res.data.data.regional)
       })
    }
    return(
        <>
    
         <div className="p-2 mb-4 bg-light rounded-3 shadow">
      <div className="container-fluid py-2">
        <h1 className="display-5 fw-bold">Welcome to About Page!</h1>
        
       
      </div>
    </div>
   <div className="container mt-6">
  <div className="row">
    {data.map((item, index) => (
      <div className="col-md-6 mb-4" key={index}>
        <div className="card bg-success text-white h-100">
          <div className="card-body">
            <h5 className="card-title">{item.loc}</h5>
            <p className="card-text">
              <strong>Cases Indian:</strong> {item.confirmedCasesIndian} <br />
              <strong>Discharged:</strong> {item.discharged} <br />
              <strong>Deaths:</strong> {item.deaths} <br />
              <strong>Total Confirmed:</strong> {item.totalConfirmed}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div> 


     <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">loc</th>
      <th scope="col">CasesIndian</th>
      <th scope="col">discharged</th>
      <th scope="col">deaths</th>
      <th scope="col">totalConfirmed</th>
      
    </tr>
  </thead>
  <tbody>
  {data.map((item)=>{
      return(<tr>

        <td>{item.loc}</td>
        <td>{item.confirmedCasesIndian}</td>
        <td>{item.discharged}</td>
        <td>{item.deaths}</td>
        <td>{item.totalConfirmed}</td>
       
      </tr>)
    })}
   
  </tbody>
</table> 

        </>
    )
}