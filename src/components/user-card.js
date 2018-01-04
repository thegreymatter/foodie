import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import {markOrdersAsNotified} from "../store/orders/actions";
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import {connect} from "react-redux";
import {getWaitingOrdersByUserId} from "../store/orders/reducer";
import {getFloor} from "../store/appData/reducer";
import fireworks from "fireworks";
import Colors from "../colors";

const notifyUrl = "https://foodie-telegram-bot.herokuapp.com/notify?userId=";
const radius = 10;
const imageSize = 200;

class UserCard extends React.Component {

    wasNotified() {
        return _.some(this.props.usersWaitingOrders, order => order.notified === true)
    }

    async onUserClick() {
        fireworks({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            colors: [Colors.notified, Colors.counter, Colors.firework1]
        });

        if (this.wasNotified.bind(this)()) { //Send message only once
            return;
        }

        fetch(notifyUrl + this.props.user.id + "&floor=" + this.props.floor, {
            mode: 'no-cors',

            method: 'post',

            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        this.props.dispatch(markOrdersAsNotified(this.props.user));


    }

    render() {

        const styles = {
            div: {
                borderRadius: 20

            },
            card: {
                maxWidth: imageSize,
                margin: 10,
                borderRadius: radius,
                backgroundColor: this.props.user.waiting ? (this.wasNotified.bind(this)() ? Colors.notified : Colors.white) : Colors.notWaiting
            },
            media: {
                height: imageSize,
                width: imageSize,
                borderTopLeftRadius: radius,
                borderTopRightRadius: radius,
            },
            name: {
                fontSize: 18,
            }
        };


        const imagePrefix = "http://searsboards.searsil.loc/-/get-user-image/";

        return (
            <div style={styles.div}>
                <Card
                    style={styles.card}
                    onClick={this.onUserClick.bind(this)}
                >
                    <CardMedia
                        style={styles.media}
                        image={imagePrefix + this.props.user.searsId}
                    />
                    <CardContent>
                        <div style={styles.name}>
                            {this.props.user.name}
                        </div>
                    </CardContent>
                </Card>
            </div>

        );
    }
}

UserCard.propTypes = {
    user: PropTypes.object,
    name: PropTypes.string,
    subText: PropTypes.string,
    searsId: PropTypes.string,
    onClick: PropTypes.func,
};

function mapStateToProps(state, ownProps) {
    return {
        user: ownProps.user,
        usersWaitingOrders: getWaitingOrdersByUserId(state, ownProps.user.id),
        floor: getFloor(state),
    };
}

export default connect(mapStateToProps)(UserCard);