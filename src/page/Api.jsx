import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

export default function Api() {
  const [nm, setName] = useState("");
  const [eml, setEamil] = useState("");
  const [mb, setMob] = useState("");
  const [age, setAge] = useState("");
  const [ct, setCity] = useState("");
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Search state

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ushow, setUShow] = useState(false);
  const handleUClose = () => setUShow(false);
  const handleUShow = () => setUShow(true);

  const hndlnm = (e) => { setName(e.target.value) }
  const hndleml = (e) => { setEamil(e.target.value) }
  const hndlmb = (e) => { setMob(e.target.value) }
  const hndlage = (e) => { setAge(e.target.value) }
  const hndlct = (e) => { setCity(e.target.value) }

  function getId(id, nm, eml, mb, age, ct) {
    setId(id); setName(nm); setEamil(eml); setMob(mb); setAge(age); setCity(ct);
    handleUShow();
  }

  const del = (uid) => {
    axios.delete('http://127.0.0.1:3000/delById', {
      data: { id: uid }
    }).then(res => {
      if (res.data.status === 200) {
        alert("Delete Success");
        covid();
        setShow(false);
      } else {
        alert("Delete Fail");
      }
    });
  }

  const updt = () => {
    const dt = {
      name: nm,
      email: eml,
      mobile: mb,
      age: Number(age),
      city: ct,
      id: id
    };
    axios.put('http://127.0.0.1:3000/updtuser', dt)
      .then(res => {
        if (res.data.status === 200) {
          alert("Update Success");
          covid();
          setUShow(false);
          clearInput();
        } else {
          alert("Update Fail");
        }
      });
  }

  const getnm = () => {
    const dt = {
      name: nm,
      email: eml,
      mobile: mb,
      age: age,
      city: ct
    };
    axios.post('http://127.0.0.1:3000/adduser', dt)
      .then(res => {
        if (res.data.status === 200) {
          alert("Insert Success");
          covid();
          setShow(false);
          clearInput();
        } else {
          alert("Insert Fail");
        }
      });
  }

  const clearInput = () => {
    setName('');
    setAge('');
    setCity('');
    setEamil('');
    setMob('');
  };

  useEffect(() => {
    covid();
  }, []);

  const covid = () => {
    axios.get('http://127.0.0.1:3000/emp')
      .then(res => {
        setData(res.data.emp);
      });
  };

  return (
    <>
      {/* Update Modal */}
      <Modal show={ushow} onHide={handleUClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control size="sm" value={nm} onChange={hndlnm} type="text" placeholder="Enter Name" className="mb-2" />
          <Form.Control size="sm" value={eml} onChange={hndleml} type="text" placeholder="Enter Email" className="mb-2" />
          <Form.Control size="sm" value={mb} onChange={hndlmb} type="text" placeholder="Enter Mobile" className="mb-2" />
          <Form.Control size="sm" value={age} onChange={hndlage} type="text" placeholder="Enter Age" className="mb-2" />
          <Form.Control size="sm" value={ct} onChange={hndlct} type="text" placeholder="Enter City" className="mb-2" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUClose}>Close</Button>
          <Button variant="warning" onClick={updt}>Update</Button>
        </Modal.Footer>
      </Modal>

      {/* Add Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control size="sm" onChange={hndlnm} type="text" placeholder="Enter Name" className="mb-2" />
          <Form.Control size="sm" onChange={hndleml} type="text" placeholder="Enter Email" className="mb-2" />
          <Form.Control size="sm" onChange={hndlmb} type="text" placeholder="Enter Mobile" className="mb-2" />
          <Form.Control size="sm" onChange={hndlage} type="text" placeholder="Enter Age" className="mb-2" />
          <Form.Control size="sm" onChange={hndlct} type="text" placeholder="Enter City" className="mb-2" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={getnm}>Save</Button>
        </Modal.Footer>
      </Modal>

      {/* Main content */}
      <div className="p-2 mb-4 bg-light rounded-3 shadow">
        <div className="container-fluid py-2">
          <h1 className="display-5 fw-bold">User Data</h1>
          <Button variant="success" onClick={handleShow} className="mb-3">Add User</Button>

          {/* ✅ Search Field */}
          <Form.Control
            type="text"
            placeholder="Search by name, email, city..."
            className="mb-3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* User Table */}
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Age</th>
                <th>City</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) =>
                  item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.city.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.age}</td>
                    <td>{item.city}</td>
                    <td><Button variant="danger" onClick={() => del(item.id)}>Delete</Button></td>
                    <td><Button variant="warning" onClick={() => getId(item.id, item.name, item.email, item.mobile, item.age, item.city)}>Update</Button></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
