import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Portfolio from './PortfolioComponent';
import Contact from './ContactComponent';
import AlbumContents from './AlbumContentsComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ALBUMS } from '../shared/albums';
import { CONTENTS } from '../shared/contents';
 

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            albums: ALBUMS,
            contents: CONTENTS
        }
    }
    
    render(){
        const HomePage = () => {
            return (
                <Home album={this.state.albums.filter(album => album.featured)} />
            );
        };

        const AlbumPhotos = ({match}) => {
            return (
                <AlbumContents 
                    album={this.state.albums.filter(album => album.id === +match.params.albumId)[0]}
                    contents={this.state.contents.filter(content => content.albumId === +match.params.albumId)}
                />
            );
        };

        return(
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/portfolio' render={() => <Portfolio albums={this.state.albums} />} />
                    <Route path='/portfolio/:albumId' component={AlbumPhotos} />
                    <Route path='/about' component={About} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home'/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Main;

