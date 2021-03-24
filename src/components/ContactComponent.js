import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            phoneNum : '',
            email : '',
            agree: false,
            contactType : 'By phone',
            feedback : ''
            
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = event.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) { 
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return (
            <div className="container">
                <div className="row row-center">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact</h2>
                        <hr />
                    </div>
                </div>

                <div className="row row-content-noline">
                    <div className="col-md-4">
                        <img className="d-block w-100" src="/assets/images/ContactLg.jpg" alt="Contact Page"></img>
                    </div>
                    <div className="col-md-8">
                    <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={8}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        defaultValue={this.state.firstName}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={8}>
                                    <Input type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        defaultValue={this.state.lastName}
                                        onChange={this.handleInputChange} />
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={8}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        defaultValue={this.state.phoneNum}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={8}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        defaultValue={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={8}>
                                    <Input type="textarea" id="feedback" name="feedback"
                                        rows="6"
                                        defaultValue={this.state.feedback}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 8, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;