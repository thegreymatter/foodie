import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from "prop-types";

export default class SnackBar extends React.Component {
    render() {
        return (
            <Snackbar
                open={this.props.open}
                autoHideDuration={2000}
                onClose={this.props.handleClose}
                message={this.props.message}
            />
        );
    }
}


SnackBar.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string,
    handleClose: PropTypes.func,
};