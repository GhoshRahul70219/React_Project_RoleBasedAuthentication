import React, { useEffect } from 'react'
import './Role.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";
import { FaEdit} from "react-icons/fa"
import { FaTrash } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getAll } from '../service';
function Role() {
    const [show, setShow] = useState(false);
    const [status,setStatus] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [roles,setRoles] = useState([]);
    useEffect = (()=>{
       if(!roles.length)
       {
        fetchRoles();
       }
    });
    const fetchRoles = () => {
        getAll('/otp/request').then(response =>{
            console.log(response);
            //setRoles(response.data);
            setRoles(["a","b"]);
        })
    }




    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  function handleChange(event) {
    setStatus(event.target.checked);
    console.log(event.target.checked);
  }
    return (
        <>
            <div className={"my-3"}>
                <div className='text-end createDiv shadow-lg p-3 mb-2 bg-white rounded d-flex justify-content-end'>
                    <InputGroup className="mr-3 w-25 px-4">
                        <Form.Control placeholder="Search here" />
                        <Button className="btn btn-outline-info" variant=" " id="btnSearch"><FaSearch /></Button>
                    </InputGroup>
                    <Button className='' onClick={handleShow} variant="success">Create</Button>

                </div>
                <div className='DtTable shadow-lg p-3 mb-2 bg-white rounded'>
                    <Card className='MainCard'>
                        <Card.Header className='bg-primary text-white fs-5 fw-bold'>List of Role</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead className='table-primary'>
                                    <tr>
                                        <th className='text-end'>#</th>
                                        <th className='text-center'>Role Name</th>
                                        <th className='text-center'>Descripction</th>
                                        <th className='text-center'>Status</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-end'>1</td>
                                        <td className='text-center'>Mark</td>
                                        <td className='text-center'>Otto</td>
                                        <td className='text-center'>
                                            <Form.Check
                                                type="switch"
                                                id="table_switch"
                                                className='fs-4'
                                            />
                                        </td>
                                        <td className='text-center'>
                                            <Button variant='' onClick={handleShow} className='btnEdit'><FaEdit className='Fill-Blue' /></Button>
                                            <Button variant='' className='btnEdit'><FaTrash className='Fill-Delete' /></Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                   
                </div>

            </div>

            <Modal
                onHide={handleClose}
                backdrop="static"
                keyboard={false} show={show}
                centered
                >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Role</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Role name" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter the role name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className='mt-2'>
                                     <Form.Control type="text" placeholder="Description" />
                                </Form.Group>
                                <Form.Group>
                                        <Form.Check
                                                type="switch"
                                                id="switch"
                                                className='fs-8'
                                                label='Status'
                                                onChange={handleChange}
                                                checked={status}
                                        />
                                </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default Role
