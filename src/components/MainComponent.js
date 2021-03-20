import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Portfolio from './PortfolioComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ALBUMS } from '../shared/albums';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            albums: ALBUMS
        }
    }
    
    render(){
        const HomePage = () => {
            return (
                <Home album={this.state.albums.filter(album => album.featured)} />
            );
        };

        return(
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/portfolio' render={() => <Portfolio albums={this.state.albums} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home'/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Main;

