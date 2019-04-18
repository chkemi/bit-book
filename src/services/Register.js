import { api } from "../shared/api";

const fetchRegister = (dataObj) => {
    return api
        .postReg(dataObj, `/auth/register`)
        .then(token => token)
}

export {
    fetchRegister,
}