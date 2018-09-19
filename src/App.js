import React from 'react';
import Header from './pages/header'
import {connect} from "react-redux";
import {isLoggedIn} from "./store/firebase/reducer";
import LoginPage from "./pages/LoginPage";

function getAppBody(props) {
    if (props.isLoggedIn)
        return props.children;

    if (props.isLoggedIn === undefined) {
        return <div/>;
    }
    return <LoginPage/>;
}

function App(props) {
    return (
        <div>
            <Header/>
            {getAppBody(props)}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isLoggedIn: isLoggedIn(state),
    };
}

export default connect(mapStateToProps)(App);
