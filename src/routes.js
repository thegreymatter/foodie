import React from 'react';
import {Router, Route} from 'react-router';
import {createHashHistory} from 'history';
import App from './App'
import HomePage from "./pages/home-page";
import {isLoggedIn} from "./store/firebase/reducer";
import {connect} from "react-redux";

const history = createHashHistory();

class Root extends React.Component {

    render() {
        return (
            <Router history={history}>
                <App isLoggedIn={this.props.isLoggedIn}>
                    <Route exact path="/" component={(props) =>
                        <HomePage {...props}/>
                    }/>
                    <Route exact path="/three" component={(props) =>
                        <HomePage {...props} floor={3}/>
                    }/>
                    <Route exact path="/five" component={(props) =>
                        <HomePage {...props} floor={5}/>
                    }/>
                </App>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: isLoggedIn(state),
    };
}

export default connect(mapStateToProps)(Root);
