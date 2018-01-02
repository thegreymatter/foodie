import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const radius = 10;
const width = 200;

const styles = {
    div:{
        borderRadius: 20

    },
    card: {
        maxWidth: width,
        margin: 10,
        borderRadius: radius,

    },
    media: {
        height: width,
        width: width,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,

    },
};

export default class UserCard extends React.Component {

    render() {
        const imagePrefix = "http://searsboards.searsil.loc/-/get-user-image/";

        return (
            <div style={styles.div}>
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
            </div>

        );
    }
}

UserCard.propTypes = {
    name: PropTypes.string,
    subText: PropTypes.string,
    searsId: PropTypes.string,
    onClick: PropTypes.func,
};
