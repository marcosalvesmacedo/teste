module.exports = [
    {
        method: 'GET',
        path: '/api/v1/authentication/user/usuarios',
        handler: (request, h) => {
            return require('../data/usuarios.json'); 
        }
    }
];