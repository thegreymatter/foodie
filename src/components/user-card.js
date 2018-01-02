import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        maxWidth: 200,
        margin: 20,
    },
    media: {
        height: 200,
    },
};

export default class UserCard extends React.Component {

    render() {

        return (
            <span>
                <Card style = {styles.card}>
                    <CardMedia
                        style={styles.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography type="headline" component="h2">
                            {this.props.name}
                        </Typography>
                        <Typography component="p">
                            {this.props.subText}
                        </Typography>
                    </CardContent>
                </Card>
            </span>
        );
    }
}

UserCard.propTypes = {
    name: PropTypes.string,
    subText: PropTypes.string,
};
