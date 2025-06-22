import React from 'react';
import axios from 'axios'
import About from './About';
import { useState } from 'react';
function Home() {
 const [sts, setSts]=useState('')
 const [data, setData]=useState([])
  const api=()=>{
    axios.get("http://localhost:3000/menu")
    .then(res=>{
      console.log(res.data)
      setData(res.data.menu)
      
    })
  }

  return (
    
    <div className="p-5 mb-4 bg-light rounded-3 shadow">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{sts}</h1>
        <p className="col-md-8 fs-4">
          This is a simple Jumbotron-style component built with Bootstrap and React.
          You can customize this to include any content you like — text, images, buttons, etc.
        </p>
        <button className="btn btn-primary btn-lg" onClick={api} type="button">
          My App
        </button>
      </div>
       <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">mname</th>
      <th scope="col">price</th>
      <th scope="col">category</th>
      <th scope="col">size</th>
   
      
    </tr>
  </thead>
  <tbody>
  {data.map((item)=>{
      return(<tr>

        <td>{item.mname}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
        <td>{item.size}</td>
        
       
      </tr>)
    })}
   
  </tbody>
</table>
    </div>
  );
}

export default Home;
