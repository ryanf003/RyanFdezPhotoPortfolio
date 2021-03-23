import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderAlbumItem({contents}){
    return(
        <Card> 
            <CardImg width="100%" src={contents.image} alt={contents.name} />
        </Card> 
    )
}


function AlbumContents(props){
    
    const albumPhotos = props.contents.map(content => {
        return(
            <div key={content.id} className="col-md-3 m-4">
                <RenderAlbumItem contents={content}/>
            </div>
        )
    })

    if(props.album){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/portfolio">Portfolio</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.album.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.album.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row"> 
                    {albumPhotos}
                </div>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

export default AlbumContents;