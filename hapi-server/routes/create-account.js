
const response = require('../data/create-account.json');

module.exports = [
    {
        method: 'POST',
        path: '/api/v1/authentication/user/create-account',
        handler: (request, h) => {
            return h.response(response).code(200);
        }
    }
];