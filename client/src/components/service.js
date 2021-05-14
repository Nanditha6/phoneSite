//const API_END_POINT = "http://localhost:5000";

const axios = require("axios");

const getData = (url = "/allProducts") => {
    return new Promise((resolve, reject) => {
        axios.get(`${url}`).then(response => {
            resolve(response.data);
        }).catch((err) => {
            reject(err);
        });
    });
}

export {
    getData
}