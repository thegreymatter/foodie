import React from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import imageThree from './floor-three.jpg'
import imageFive from './floor-five.jpg'

const radius = 10;
const width = 200;

class FloorAsk extends React.Component {

    redirect(path) {
        this.props.history.push(path);
    }

    render() {
        const styles = {
            container: {
                display: "flex",
                textAlign: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
            },
            div: {
                borderRadius: 20

            },
            card: {
                maxWidth: width,
                margin: 10,
                borderRadius: radius,
                backgroundColor: "white"
            },
            media: {
                height: width,
                width: width,
                borderTopLeftRadius: radius,
                borderTopRightRadius: radius,
            },
            name: {
                fontSize: 18,
            }
        };


        return (
            <div style={styles.container}>
                <Card
                    style={styles.card}
                    onClick={() => this.redirect.bind(this)("/three")}
                >
                    <CardMedia
                        style={styles.media}
                        image={imageThree}
                    />
                    <CardContent>
                        <div style={styles.name}>
                            3rd Floor
                        </div>
                    </CardContent>
                </Card>

                <Card
                    style={styles.card}
                    onClick={() => this.redirect.bind(this)("/five")}
                >
                    <CardMedia
                        style={styles.media}
                        image={imageFive}
                    />
                    <CardContent>
                        <div style={styles.name}>
                            5th Floor
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps)(FloorAsk));
