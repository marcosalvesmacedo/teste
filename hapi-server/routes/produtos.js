module.exports = [
    {
        method: 'GET',
        path: '/produtos',
        handler: (request, h) => {
            return require('../data/produtos.json');
        }
    }
];