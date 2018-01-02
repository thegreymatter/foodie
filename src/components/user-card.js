import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        maxWidth: 200,
        margin: 10,
    },
    media: {
        height: 200,
        width: 200,
    },
};

export default class UserCard extends React.Component {

    render() {
        const imagePrefix = "http://searsboards.searsil.loc/-/get-user-image/";

        return (
            <Card
                style={styles.card}
                onClick={this.props.onClick}
            >
                <CardMedia
                    style={styles.media}
                    image={imagePrefix + this.props.searsId}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography type="headline" component="h3">
                        {this.props.name}
                    </Typography>
                    <Typography component="p">
                        {this.props.subText}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

UserCard.propTypes = {
    name: PropTypes.string,
    subText: PropTypes.string,
    searsId: PropTypes.string,
    onClick: PropTypes.func,
};
