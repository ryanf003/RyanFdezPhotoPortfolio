import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'

function RenderCard({album}){
    return(
        <Card> 
            <Link to={`/portfolio/${album.name}`}>
            <CardImg width="100%" src={album.featuredimage} alt={album.name} /></Link>
            <CardBody>
                <Link to={`/portfolio/${album.name}`}><CardTitle>{album.name}</CardTitle></Link>
                <CardText>
                    <i className="fa fa-image fa-lg" /> {album.count} &nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-calendar fa-lg" />
                </CardText>
            </CardBody>
        </Card> 
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row row-content-noline">
                <div className="col-md-5 my-3">
                    <img className="d-block img-thumbnail" src="/assets/images/HomePFP.jpg" alt="Contact Page"></img>
                </div>
                <div className="col-md-7 my-3 center">
                    <h2>Hi, I'm Ryan</h2>
                    <h4>An amateur photographer, based in California.</h4>
                    <Card className="bg-light ">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">"Photography is the art of making memories tangible."</p>
                                <footer className="blockquote-footer">Destin Sparks
                                
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                    <Link to="/about">
                        <button type="button" className="btn btn-primary my-3">More About Me</button>
                    </Link>
                </div>
                <hr />
            </div>
            <div className="row row-content-noline row-center">
                <div className="col-md-12">
                    <h3>Featured Albums</h3>
                </div>
                <div className="col-md m=1">
                    <RenderCard album={props.album[0]} />
                </div>
                <div className="col-md m=1">
                    <RenderCard album={props.album[1]} />
                </div>
                <div className="col-md m=1">
                    <RenderCard album={props.album[2]} />
                </div>
                <div className="col-md-12 my-3">
                    <Link to="/portfolio">
                        <button type="button" className="btn btn-primary">View All Albums</button>
                    </Link>
                </div>
            </div>
            <div className="row row-center">
                
            </div>
        </div>
    );
}

export default Home; 