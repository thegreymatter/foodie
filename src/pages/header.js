import React from 'react';
import logo from './Logo.png'
import SearchBox from "../components/search-box";
import {connect} from 'react-redux';
import {updateFilter} from "../store/appData/actions";
import {getDeliveredOrdersCount} from "../store/orders/reducer";
import {getFloor} from "../store/appData/reducer";
import {withRouter} from "react-router";
import Color from "../colors";
import {signOutRequest} from '../store/firebase/actions';

const shouldDisplaySearch = false;

class Header extends React.Component {
    render() {
        const style = {
            background: {
                backgroundColor: Color.header,
                padding: 5,
            },
            container: {
                flexFlow: "row",
                display: "flex",
                justifyContent: "space-between"
            },
            logo: {
                marginLeft: 20,
                cursor: "pointer",
            },
            name: {
                verticalAlign: "top",
                display: "inline-block",
                marginLeft: 15,
                marginTop: 7,
                color: Color.counter,
                fontSize: 27,

               // textShadow: "2px 2px #000000"
            },
            search: {
                // marginLeft: 200,
            },
            logoImage: {
                height: 40,
            },
            delivered: {
                marginRight: 20,
                marginTop: 7,
                color: Color.counter,
                fontSize: 27,
                //textShadow: "2px 2px #000000"
            }
        };

        const askFloorPage = this.props.floor === undefined;

        return (
            <div style={style.background}>

                <div style={style.container}>

                    <span>
                        <span
                            style={style.logo}
                            onClick={() => {
                                this.props.history.push('/');
                                this.props.dispatch(updateFilter(""));
                            }}
                        >
                            <img src={logo} style={style.logoImage} alt="logo"/>

                        </span>

                        <span style={style.name}>
                            {askFloorPage ? null : "Foodie"}
                        </span>
                    </span>

                    {shouldDisplaySearch && <span style={style.search}>
                        {askFloorPage ? null :
                            <SearchBox
                                hint="Search..."
                                handleChange={(value) => {
                                    this.props.dispatch(updateFilter(value));
                                }}/>

                        }
                    </span>}

                    <span style={style.delivered} onClick={this.props.signOut}>
                        {askFloorPage ?
                            "Where am I?" :
                            this.props.deliveredOrdersCount.length + " Orders Delivered!"}
                    </span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        deliveredOrdersCount: getDeliveredOrdersCount(state),
        floor: getFloor(state),
    };
}

function mapDispatchToProps(dispatch){
    return {
        signOut: () => dispatch(signOutRequest())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

