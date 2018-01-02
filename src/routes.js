import React from 'react';
import {Router, Route} from 'react-router';
import {createHashHistory} from 'history';

import App from './App'
// import {isLoggedIn} from "./store/firebase/reducer";
// import connect from "react-redux/es/connect/connect";
import HomePage from "./pages/home-page";

const history = createHashHistory();

class Root extends React.Component {


    render() {
        return (
            <Router history={history}>
                <App>
                    <Route exact path="/" component={HomePage}/>
                    {/*<Route path="/form" component={LectureForm}/>*/}
                    {/*<Route path="/org" component={OrganizationPage}/>*/}
                    {/*<Route path="/followup" component={FollowUpPageTitle}/>*/}
                    {/*<Route path="/actionRequired" component={ActionRequiredPage}/>*/}
                    {/*<Route path="/payment" component={PaymentPage}/>*/}
                    {/*<Route path="/expectedIncome" component={ExpectedIncomePage}/>*/}
                    {/*<Route path="/futureLectures" component={FutureLecturesPage}/>*/}
                    {/*<Route path="/allOrders" component={AllOrdersPage}/>*/}
                    {/*<Route path="/print" component={PrintOrderPage}/>*/}
                </App>
            </Router>
        )
    }
}


export default Root;