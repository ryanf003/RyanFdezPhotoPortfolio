import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props){
    return(
        <div className="container">
            <div className="row row-center">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>About</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>About Me</h2>
                        <hr />
                    </div>
                </div>
            <div className="row">
                <div className="col-md-4 my-3">
                    <img className="d-block img-thumbnail" src="/assets/images/AboutPFP.jpg" alt="Contact Page"></img>
                </div>
                <div className="col-md-8 my-5">
                    <h4>I'm an amateur photographer, based in California.</h4>
                    <p>
                        I am mostly self taught with some supplementary photography classes in high school and college. 
                    </p>
                    <p> 
                        I work with a Sony a7rIII and enjoy a wide range of photography genres, including automotive, street, and landscapes.
                    </p>
                    <p>
                        My hobbies and interests away from the camera include playing games with friends, going on hikes and camping trips, 
                        and watching movies. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;