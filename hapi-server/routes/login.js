module.exports = [
    {
        method: 'POST',
        path: '/api/v1/authentication/user/login',
        handler: (request, h) => {
            return require('../data/token.json');
        }
    }
];