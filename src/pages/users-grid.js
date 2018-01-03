import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {getWaitingUsers} from "../store/users/reducer";
import UserCard from "../components/user-card";
import SnackBar from "../components/snack-bar";
import {validateUsers} from "../store/users/actions";
const notifyUrl = "https://foodie-telegram-bot.herokuapp.com/notify?userId=";



class UserGrid extends React.Component {


    render() {
        const styles = {
            container: {
                display: "flex",
                textAlign: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
            }
        };

        this.props.dispatch(validateUsers());

        return (
            <div style={styles.container}>
                {_.map(this.props.users, user =>
                    <UserCard
                        key={user.id}
                        user={user}
                    />
                )}
            </div>

        );

    }
}

function mapStateToProps(state) {
    return {
        users: getWaitingUsers(state),
    };
}

export default connect(mapStateToProps)(UserGrid);
