import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class SearchBox extends React.Component {

    render() {
        const styles = {
            // iconButton: {
            //     float: 'left',
            //     margin: "-5px -5px 0 -10px",
            //     // display: this.state.searchText === "" ? "inline-block" : "none",
            // },
            // autoComplete: {
            //     top: -14,
            //     marginLeft: 5,
            // },
            // container: {
            //     // backgroundColor: containerColor,
            //     borderRadius: 2,
            //     height: 35,
            //     paddingLeft: 10,
            //     marginRight: 10,
            //     marginTop: 15,
            // },
            input: {
                WebkitTextFillColor: "inherit",
                color: "white",
                fontSize: 28,

            },
            // hintStyle: {
            //     color: "white",
            // },
            textField: {
                marginTop: 10,
                // marginLeft: 50,
                width: 400,
                fontColor: "white",
            },
            underline: {
                borderColor: "white",
                color: "white",
                display: "none"
            }
        };


        return (
            <TextField
                style={styles.textField}
                InputProps={{style: styles.input}}
                // underlineFocusStyle={styles.underline}
                fullWidth={true}
                onChange={(event) => this.props.handleChange(event.target.value)}
                placeholder={this.props.hint}
            />
        );
    }
}

SearchBox.propTypes = {
    handleChange: PropTypes.func,
    hint: PropTypes.string,
};

