module.exports = [
    {
        method: 'GET',
        path: '/usuarios',
        handler: (request, h) => {
            return require('../data/usuarios.json'); 
        }
    }
];