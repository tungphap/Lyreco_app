import { AsyncStorage, Alert, ToastAndroid } from 'react-native';

const LoginApi = async (url, param) => {
    try {
        const body = new FormData();
        body.append('email', param.email.toString());
        body.append('password', param.password.toString());

        let response = await fetch(url, {
            method: 'POST',
            body: body
        });
        if (response.status == 200) {
            let responseJson = await response.json();
            return responseJson;
        } else {
            return null;
        }
    } catch (error) { }
}
export default LoginApi;