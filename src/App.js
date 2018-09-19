import React from 'react';
import Header from './pages/header'
import LoginPage from "./pages/LoginPage";

function AppBody(props) {
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

            <AppBody isLoggedIn={props.isLoggedIn}>
                {props.children}
            </AppBody>
        </div>
    );
}

export default App;
