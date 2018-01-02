import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class SearchBox extends React.Component {

    render() {
        return (
            <TextField
                style={this.props.style}
                fullWidth={true}
                onChange={(event) => this.props.handleChange(event.target.value)}
            />
        );
    }
}

SearchBox.propTypes = {
    handleChange: PropTypes.func,
    style: PropTypes.object,
};

