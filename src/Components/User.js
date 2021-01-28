import React, { useState } from 'react';
import EditUserForm from '../Components/EditUserForm';
import { Card, Button, Modal } from 'react-bootstrap';

const User = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteUser(props.userInfo.id);
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditUserForm
                        userInfo={props.userInfo}
                        editUser={props.editUser}
                        closeModal={handleClose}
                    />
                </Modal.Body>
            </Modal>
            <div>
                <Card style={{ marginTop: "2rem", textAlign:"center", boxShadow: "0px 10px 40px 0px rgba(0,0,0,0.2)", borderRadius:"1rem" }}>
                    <Card.Body>
                        <Card.Title style={{letterSpacing:"3px"}}>{props.userInfo.Name}</Card.Title>
                        <Card.Subtitle className="mb-2 " style={{letterSpacing:"3px"}}><b>Fruit/Vegetable type:</b> {props.userInfo.vFruitType}</Card.Subtitle>
                        <Card.Text>
                            <p></p>
                            <p>Quantity: {props.userInfo.Quantity}</p>
                            <p>Location: {props.userInfo.Location}</p>
                            <p>Date: {props.userInfo.Date}</p>
                            <p>{props.userInfo.Id}</p>
                        </Card.Text>
                        <Card.Body class="d-flex justify-content-around">
                            <Card.Link href="#" class="p-2"><Button variant="primary" size="sm" onClick={handleShow}>Edit</Button></Card.Link>
                            <Card.Link href="#" class="p-2"><Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button></Card.Link>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default User;
