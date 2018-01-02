import React from 'react';
import logo from './Logo.png'

export default class Header extends React.Component {
    render() {
        const style = {
            background: {
                backgroundColor: "#737982",
                padding: 5,
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
            },
            logo: {
                height: 60,
            }
        };

        return (
            <div style={style.background}>

                <div style={style.container}>

                    <span style={style.item}>
                        <img src={logo} style={style.logo} alt="logo"/>

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
