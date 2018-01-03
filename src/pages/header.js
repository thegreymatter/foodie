import React from 'react';
import logo from './Logo.png'
import SearchBox from "../components/search-box";
import {connect} from 'react-redux';
import {updateFilter} from "../store/filter/actions";

class Header extends React.Component {
    render() {
        const style = {
            background: {
                backgroundColor: "#515151",
                padding: 5,
            },
            container: {
                flexFlow: "row",
                display: "flex",
                justifyContent: "space-around"
            },
            item: {
                // display: "inlineBlock",
                // width: "33%",
                // textAlign: "center",
            },
            logo: {
                height: 60,
            },
            searchBox: {
                marginTop: 20,
                width: 500
            }
        };

        return (
            <div style={style.background}>

                <div style={style.container}>

                    <span style={style.item}>
                        <img src={logo} style={style.logo} alt="logo"/>

                    </span>

                    <span style={style.item}>
                        <SearchBox
                            style={style.searchBox}
                            hint="Search..."
                            handleChange={(value) => {
                                this.props.dispatch(updateFilter(value));
                            }}/>
                    </span>

                    <span style={style.item}>
                        IMAGE
                    </span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}


export default connect(mapStateToProps)(Header);

