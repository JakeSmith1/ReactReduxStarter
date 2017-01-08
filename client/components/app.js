import React, { Component } from 'react';
// import Navbar from './Navbar';
import List from './list';
import Footer from './Footer';

import style from '../styles/style.scss';


export default class App extends Component {
    render() {
        return (
            <div className="app">
                {/* <Navbar /> */}
                <List />
                {/* {this.props.children} */}
                <Footer />
            </div>
        );
    }
}
