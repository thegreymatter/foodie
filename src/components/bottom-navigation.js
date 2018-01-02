import React from 'react';
import BottomNavigationSection, {BottomNavigationButton} from 'material-ui/BottomNavigation';
import FoodIcon from 'material-ui-icons/Restaurant';
import PackagesIcon from 'material-ui-icons/LocalPostOffice';
import InterviewIcon from 'material-ui-icons/Pets';


export default class BottomNavigation extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const styles = {
            section: {
                width: 500,
                backgroundColor: "#5D6465"
            },
            button: {
                color: "white"
            }
        };
        const {value} = this.state;

        return (
            <BottomNavigationSection
                value={value}
                onChange={this.handleChange}
                showLabels
                style={styles.section}
            >
                <BottomNavigationButton
                    label="Packages"
                    icon={<PackagesIcon/>}
                    style={styles.button}
                />

                <BottomNavigationButton
                    label="Food"
                    icon={<FoodIcon/>}
                    style={styles.button}
                />
                
                <BottomNavigationButton
                    label="Interview"
                    icon={<InterviewIcon/>}
                    style={styles.button}
                />

            </BottomNavigationSection>
        );
    }
}
