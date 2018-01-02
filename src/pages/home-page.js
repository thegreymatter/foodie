import React from 'react';
import UsersList from './users-list';
import UserCard from "../components/user-card";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <UsersList/>
                <UserCard/>
            </div>
        );
    }
}
