const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
  {
    method: 'GET',
    path: '/',
    handler: () => 'HELLO WORLD',
  }, {
    method: 'GET',
    path: '/about',
    handler: () => 'Halaman about',
  }, {
    method: 'GET',
    path: '/users/{username?}',
    handler: (request) => {
      const { username = 'stranger' } = request.params;
      return `Halo, ${username}`;
    },
  },
  {
    method: '*',
    path: '/users/{username}',
    handler: () => 'Halaman tidak dapat diakses dengan method request tersebut',
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request) => {
      const { payload } = request;
      return payload;
    },
  },
];

module.exports = routes;
