module.exports = [
    {
        method: 'GET',
        path: '/api/v1/brands/produtos',
        handler: (request, h) => {
            return require('../data/produtos.json');
        }
    }
];