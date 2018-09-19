import React from 'react';
import SignInWithGoogleButtonContainer from "./google-sign-in/SignInWithGoogleButtonContainer";

export default function LoginPage() {
    const style = {
        div: {
            textAlign: "center",
            margin: 20,
        },
        pageTitle: {
            fontSize: 24,
            marginBottom: 10,
        },
    };

    return (
        <div style={style.div}>

            <div style={style.pageTitle}>
                Please login to Foodie
            </div>

            <SignInWithGoogleButtonContainer/>

        </div>
    );

}