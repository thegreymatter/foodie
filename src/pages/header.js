import React from 'react';
import logo from './Logo.png'
import SearchBox from "../components/search-box";
import {connect} from 'react-redux';
import {updateFilter} from "../store/filter/actions";
import {getDeliveredOrdersCount, getOrders} from "../store/orders/reducer";

class Header extends React.Component {
    render() {
        const style = {
            background: {
                backgroundColor: "#515151",
                padding: 5,
            },
            container: {
                // flexFlow: "row",
                display: "flex",
                // justifyContent: "space-around"
            },
            item: {
                marginLeft: 30,
                // display: "inlineBlock",
                // width: "33%",
                // textAlign: "center",
            },
            logo: {
                height: 60,
            },
            delivered:{
                marginLeft: 30,
                marginTop: 15,
                color: "#febc1d",
                fontSize: 30,
                textShadow: "2px 2px #000000"
            }
        };
        console.log(this.props.orders);

        return (
            <div style={style.background}>

                <div style={style.container}>

                    <span style={style.item}>
                        <img src={logo} style={style.logo} alt="logo"/>

                    </span>

                    <span style={style.item}>
                        <SearchBox
                            hint="Search..."
                            handleChange={(value) => {
                                this.props.dispatch(updateFilter(value));
                            }}/>
                    </span>

                    <span style={style.delivered}>
                        {this.props.deliveredOrdersCount.length} Meals Delivered!
                    </span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        deliveredOrdersCount: getDeliveredOrdersCount(state),
    };
}


export default connect(mapStateToProps)(Header);

