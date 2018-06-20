const Validator = require('Validator');
const axios = require('axios');
const api = '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'
const validator = (data, rules) => {
    const v = Validator.make(data, rules);

    if (v.fails()) {
        return v.getErrors()
    }

    return {};
}

const sendEmail = (data) => {   
    axios({
        method: 'post',
        url: 'http://localhost:8080/send',
        data: data,
    }).then(res => {});
}

export default {
    validator,
    sendEmail
}