import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FoodIcon from '@material-ui/icons/Restaurant';
import PackagesIcon from '@material-ui/icons/MarkunreadMailbox';
import InterviewIcon from '@material-ui/icons/Today';


export default class BottomNavigation extends React.Component {
    state = {
        value: 1,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const styles = {
            section: {
                width: 500,
                //backgroundColor: "#5D6465"
            },
            button: {
                //color: "white"
            }
        };
        const {value} = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                style={styles.section}
            >
                <BottomNavigationAction
                    label="Packages"
                    icon={<PackagesIcon/>}
                    style={styles.button}
                />

                <BottomNavigationAction
                    label="Food"
                    icon={<FoodIcon/>}
                    style={styles.button}
                />
                
                <BottomNavigationAction
                    label="Interview"
                    icon={<InterviewIcon/>}
                    style={styles.button}
                />

            </BottomNavigation>
        );
    }
}
