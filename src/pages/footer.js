import React from 'react';
import {connect} from 'react-redux';
import BottomNavigation from "../components/bottom-navigation";

class Footer extends React.Component {
    render() {
        const style = {
            background: {
                backgroundColor: "#5D6465",
                position: "fixed",
                bottom: "0px",
                width: "100%"
            },
            container: {
                flexFlow: "row",
                display: "flex",
                justifyContent: "space-around"
            },
        };

        return (
            <div style={style.background}>

                <div style={style.container}>
                    <BottomNavigation/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}


export default connect(mapStateToProps)(Footer);

