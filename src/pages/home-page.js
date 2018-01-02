import React from 'react';
import UsersList from './users-list';

export default class HomePage extends React.Component {
    render() {
        const styles={
            container:{
                padding: 10,
            }
        };

        return (
            <div style={styles.container}>
                <UsersList/>
            </div>
        );
    }
}
