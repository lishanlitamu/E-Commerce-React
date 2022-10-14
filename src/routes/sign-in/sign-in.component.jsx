
//import { Button } from "bootstrap";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        //const response = await signInWithGooglePopup();
        // deconstruct response
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }
    return (
        <div>
            <h1>
                <button onClick={logGoogleUser}>Sign in With Google Account</button>
            </h1>
        </div>
    );
}; //

export default SignIn;