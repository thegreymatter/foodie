import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {getUsers} from "../store/users/reducer";
import UserCard from "../components/user-card";
import SnackBar from "../components/snack-bar";

const initState = {
    snackBarOpen: false,
    snackBarMessage: "",
};

class UsersList extends React.Component {

    constructor() {
        super();
        this.state = initState;
    }

    handleClose = () => {
        this.setState(initState);
    };


    onUserClick(user) {
        this.setState({
            snackBarOpen: true,
            snackBarMessage: "Pressed " + user.firstName,
        });
    }

    render() {
        const styles = {
            container: {
                display: "flex",
                textAlign: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
            }
        };

        return (
            <div style={styles.container}>
                {_.map(this.props.users, user =>
                    <UserCard
                        key={user.id}
                        name={user.firstName + " " + user.lastName}
                        searsId={user.searsId}
                        onClick={() => this.onUserClick(user)}
                    />
                )}

                <SnackBar
                    open={this.state.snackBarOpen}
                    message={this.state.snackBarMessage}
                    handleClose={this.handleClose}
                />
            </div>

        );

    }
}

function mapStateToProps(state) {
    return {
        users: getUsers(state),
    };
}

export default connect(mapStateToProps)(UsersList);
