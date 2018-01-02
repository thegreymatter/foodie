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
    name:{
        fontSize: 18,
    }
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
                    />
                    <CardContent>
                        <div style={styles.name}>
                            {this.props.name}
                        </div>
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
