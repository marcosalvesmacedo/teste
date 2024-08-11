
const response = require('../data/token.json');

module.exports = [
    {
        method: 'POST',
        path: '/api/v1/authentication/user/login',
        handler: (request, h) => {
            return h.response(response).code(200);
        }
    }
];
