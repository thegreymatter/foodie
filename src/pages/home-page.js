import React from 'react';
import UserGrid from './users-grid';
import {connect} from "react-redux";
import {updateFloor} from "../store/appData/actions";

class HomePage extends React.Component {
    render() {
        const styles={
            container:{
                padding: 10,
            }
        };

        if(this.props.floor === undefined){
            this.props.dispatch(updateFloor(this.props.floor));
            return (
                <div style={styles.container}>
                    which floor?
                </div>
            );
        }

        console.log(this.props.floor);
        this.props.dispatch(updateFloor(this.props.floor));

        return (
            <div style={styles.container}>
                <UserGrid/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(HomePage);
