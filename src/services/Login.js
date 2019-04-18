import { api } from "../shared/api";

const fetchLogin = (dataObj) => {
    return api
        .post(dataObj, `/auth/login`)
        .then((token) => token)
}

export {
    fetchLogin
}