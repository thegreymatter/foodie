import React from 'react';
import UserGrid from './users-grid';

export default class HomePage extends React.Component {
    render() {
        const styles={
            container:{
                padding: 10,
            }
        };

        return (
            <div style={styles.container}>
                <UserGrid/>
            </div>
        );
    }
}
