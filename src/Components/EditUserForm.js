import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Container, } from 'react-bootstrap';
import { editUser } from '../store/usersActions';

class EditUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: props.userInfo.Name,
            vFruitType: props.userInfo.vFruitType,
            Quantity: props.userInfo.Quantity,
            Location: props.userInfo.Location,
            Date: props.userInfo.Date,
            id: props.userInfo.id
        }
    }

    handleChange =(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.editUser(this.state.id, this.state);
        this.setState({
            Name: "",
            vFruitType: "",
            Quantity: "",
            Location: "",
            Date:"",
        });
        this.props.closeModal()
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Control required as="select" defaultValue="Not Set"
                            placeholder="Not set" name="Name" value={this.state.Name} onChange={this.handleChange}>
                            <option>Not Set</option>
                            <option>Fruit</option>
                            <option>Vegetable</option>
                        </Form.Control>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Types of fruit/vegetable</Form.Label>
                            <Form.Control type="text" placeholder="Enter vegetable or fruit" name="vFruitType" value={this.state.vFruitType} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" placeholder="quantity" name="Quantity" value={this.state.Quantity} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Date" name="Date" value={this.state.Date} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Location" name="Location" value={this.state.Location} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

const mapDispatchToProps = {
    editUser: editUser
}

export default connect(null, mapDispatchToProps) (EditUserForm);
