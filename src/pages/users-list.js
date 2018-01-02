import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {getUsers} from "../store/users/reducer";

class UsersList extends React.Component {


    render() {
        console.log(this.props.users);

        return (
            <div>
                {_.map(this.props.users, user => <div>
                    welcome {user}
                </div>)}
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