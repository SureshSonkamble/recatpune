import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
export default function Blog(){

  const [show, setShow] = useState(false);
  const [nm, setName] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const getnm=(e)=>{
    setName(e.target.value)
  }
  const save=()=>{
    alert("Welcome: "+nm)
   
  }
    return(
        <>
         

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control size="sm" onChange={getnm} type="text" placeholder="Enter  Name" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

         <div className="p-5 mb-4 bg-light rounded-3 shadow">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome to My Blog..!</h1>
        <p className="col-md-8 fs-4">
          This is a simple Jumbotron-style component built with Bootstrap and React.
          You can customize this to include any content you like — text, images, buttons, etc.
        </p>
        <button className="btn btn-success btn-lg" type="button">
         Blog Page
        </button>
        <Button variant="primary" onClick={handleShow}>
        Add New
        </Button>
      </div>
    </div>
        </>
    )
}