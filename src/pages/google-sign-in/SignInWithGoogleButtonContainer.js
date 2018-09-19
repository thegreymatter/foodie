import {connect} from 'react-redux';
import SignInWithGoogleButton from "./SignInWithGoogleButton";
import {signInWithGoogle} from "../../store/firebase/actions";

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogleRequest: () => {
            dispatch(signInWithGoogle());
        },
    };
}

export default connect(null, mapDispatchToProps)(SignInWithGoogleButton);
