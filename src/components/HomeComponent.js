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
            <div className="row row-center">
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
            </div>
            <div className="row row-center">
                <div className="col-md-12">
                    <button type="button" className="btn btn-primary">View All Albums</button>
                </div>
            </div>
        </div>
    );
}

export default Home; 