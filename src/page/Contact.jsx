import { useState } from "react"

export default function Contact(){
  const [nm,setName]=useState('')
    const handlenm=(e)=>{
      setName(e.target.value)
    }
    const getnm=()=>{
      alert("Welcome: "+nm)
    }   
    return(
        <>
       <div className="p-5 mb-4 bg-light rounded-3 shadow">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome to Contact Page!{nm}</h1>
        <p className="col-md-8 fs-4">
          This is a simple Jumbotron-style component built with Bootstrap and React.
          You can customize this to include any content you like — text, images, buttons, etc.
        </p>
        <center>
        Name<input type="text" onChange={handlenm} ></input><br></br>
        <button className="btn btn-warning btn-lg" onClick={getnm} type="button">
        Contact Page
        </button>
        </center>
      </div>
    </div>
        </>
    )
}