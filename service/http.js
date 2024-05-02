import axios from "axios"

const API_KEY = "AIzaSyAf0M-kvwlAtXPHUuCFpZRLPHQbjxUwVaw"

export const createUser = async (email, password) => {
    let response;
    try {
        response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
        if (response) context.onAuthenticate(response.data.idToken)
    } catch (err) {
        console.log("Kullanıcı zaten kayıtlı.")
        //Error mesage yazdırılacak.
    }
    return response
}