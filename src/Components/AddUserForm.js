import React, { Component } from 'react';
import { Form, Button, Container, } from 'react-bootstrap';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            vFruitType: "",
            Quantity: "",
            Location: "",
            Date:"",
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
        this.setState({
            Name: "",
            vFruitType: "",
            Quantity: "",
            Location: "",
            Date:"",
        })
        this.props.addUser(this.state)
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit} style={{padding:"1rem", marginTop:"2rem", marginBottom:"4rem", boxShadow: "0px 10px 100px 0px rgba(0,0,0,0.2)", borderRadius:"1rem"}}>
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
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default AddUserForm;
