import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderPortfolioItem({album}){
    return(
        <FadeTransform 
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <Card> 
                <Link to={`/portfolio/${album.id}`}>
                <CardImg width="100%" src={album.image} alt={album.name} /></Link>
                <CardBody>
                    <Link to={`/portfolio/${album.id}`}><CardTitle>{album.name}</CardTitle></Link>
                    <CardText>
                        <i className="fa fa-image fa-lg" /> {album.count} &nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fa fa-calendar fa-lg" /> {album.date}
                    </CardText>
                </CardBody>
            </Card> 
        </FadeTransform>
    );
}

function Portfolio(props){

    const portfolio = props.albums.map(album => {
        return( 
            <div key={album.id} className="col-md-3 mx-4 my-3">
                <RenderPortfolioItem album={album} />
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row row-center">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Portfolio</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Portfolio</h2>
                    <hr />
                </div>
            </div>
            <div className="row m-auto">
                {portfolio}
            </div>
        </div>
    )  
}

export default Portfolio;