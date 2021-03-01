import { Auth } from 'aws-amplify';

async function signUp() {
    try {
        const { user } = await Auth.signUp({
            email,
            password,
            attributes: {
               
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}