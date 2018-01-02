import React from 'react';

export default class Header extends React.Component {
    render() {
        const style = {
            background: {
                backgroundColor: "#737982",
                padding: 20,
            },
            container: {
                flexFlow: "row",
                display: "flex",
                justifyContent: "space-around"
            },
            item: {
                // display: "inlineBlock",
                // width: "33%",
                // textAlign: "center",
            }
        };

        return (
            <div style={style.background}>

                <div style={style.container}>

                    <span style={style.item}>
                    LOGO
                </span>

                    <span style={style.item}>
                    SEARCH BOX
                </span>

                    <span style={style.item}>
                    IMAGE
                </span>
                </div>
            </div>
        );
    }
}
